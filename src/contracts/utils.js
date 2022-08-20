import {
  fundFactoryContract,
  provider,
  fundMeABI,
  web3Prefix,
  storage,
  factoryAddress,
} from "./constants";
import { ethers, utils } from "ethers";

const signer = provider.getSigner();

async function registerCrowdFund(title, description, tag, owner, goal, image) {
  const obj = { owner: owner, title: title, description: description };
  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

  const files = [new File([blob], "metadata.json"), image];

  const cid = await storage.put(files);
  const metadataURI = cid;

  await window.ethereum.request({ method: "eth_requestAccounts" });
  await fundFactoryContract.createFundMeContract(
    metadataURI,
    parseInt(goal),
    tag
  );
}

async function fetchCrowdFunds() {
  return await fundFactoryContract.getFundMeContracts();
}

async function transferToContract(address, value) {
  await window.ethereum.request({ method: "eth_requestAccounts" });

  await signer.sendTransaction({
    to: address,
    value: ethers.utils.parseEther(value),
  });
}

async function getCrowdFundDetails(address) {
  const contract = new ethers.Contract(address, fundMeABI, provider);
  const owner = await contract.owner();
  const metadataURI = await contract.metadataURI();
  const goal = await contract.goal();
  const weiBal = await provider.getBalance(contract.address);
  const bal = parseInt(ethers.utils.formatEther(weiBal));

  const data = await fetchMetaData(metadataURI);
  const image = data.imageURI;
  const metadataJSON = data.metadataURI;

  const res = await fetch(metadataJSON);
  const json = await res.json();

  return { owner, metadataURI, goal, bal, image, json };
}

async function fetchMetaData(cid) {
  const res = await storage.get(cid);
  const files = await res.files();

  const imageURI = web3Prefix + files[0].cid;
  const metadataURI = web3Prefix + files[1].cid;

  return { imageURI, metadataURI };
}

export {
  registerCrowdFund,
  fetchCrowdFunds,
  transferToContract,
  getCrowdFundDetails,
};
