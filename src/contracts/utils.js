import {
  fundFactoryContract,
  provider,
  fundMeABI,
  web3Prefix,
  storage,
  factoryAddress,
} from "./constants";
import { ethers } from "ethers";


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
  const signer = provider.getSigner();

  const res = await signer.sendTransaction({
    to: address,
    value: ethers.utils.parseEther(value),
  });
  await res.wait();
}

async function cancelFund(address) {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const signer = provider.getSigner();

  const contract = new ethers.Contract(address, fundMeABI, signer);
  const res = await contract.cancelFund({ gasLimit: 3e7 });
  await res.wait();
}

async function withdraw() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const signer = provider.getSigner();
  
  const contract = new ethers.Contract(address, fundMeABI, signer);
  const res = await contract.withdraw({ gasLimit: 3e7 });
  await res.wait();
}

async function getCrowdFundDetails(address) {
  const contract = new ethers.Contract(address, fundMeABI, provider);
  const owner = await contract.owner();
  const metadataURI = await contract.metadataURI();
  const goal = await contract.goal();
  const goalParsed = parseFloat(goal);
  const weiBal = await provider.getBalance(contract.address);
  const bal = parseFloat(ethers.utils.formatEther(weiBal));
  const tag = await contract.tag();

  const data = await fetchMetaData(metadataURI);
  const image = data.imageURI;
  const metadataJSON = data.metadataURI;

  const res = await fetch(metadataJSON);
  const json = await res.json();

  return { address, owner, metadataURI, goalParsed, bal, image, json, tag };
}

async function fetchMetaData(cid) {
  const res = await storage.get(cid);
  const files = await res.files();

  const imageURI = web3Prefix + files[0].cid;
  const metadataURI = web3Prefix + files[1].cid;

  return { imageURI, metadataURI };
}

async function getCrowdFundBalance(address) {
  const contract = new ethers.Contract(address, fundMeABI, provider);
  const weiBal = await provider.getBalance(contract.address);
  const bal = parseFloat(ethers.utils.formatEther(weiBal));

  return parseFloat(bal);
}

function getFundMeContract(address) {
  const contract = new ethers.Contract(address, fundMeABI, provider);

  return contract;
}

function parseETH(val) {
  return parseFloat(ethers.utils.formatEther(val));
}

async function isOwner(address) {
  const user = provider.getSigner();
  const owner = await user.getAddress();

  const res = owner == address;

  return res;
}

export {
  registerCrowdFund,
  fetchCrowdFunds,
  transferToContract,
  getCrowdFundDetails,
  cancelFund,
  getFundMeContract,
  parseETH,
  isOwner,
  withdraw,
};
