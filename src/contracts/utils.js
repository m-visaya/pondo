import { fundFactoryContract, provider, fundMeABI } from "./constants";
import { ethers } from "ethers";
import { Web3Storage } from 'web3.storage';

const signer = provider.getSigner();

async function registerCrowdFund(name, goal, image) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU4MDMzMkE2MzQxY2MyMTZkQUFGMGE3NTc1MDA2MWVCMjFkYjNmZkMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA5NDgwMDA4NTksIm5hbWUiOiJwb25kb1Rva2VuIn0.BYSnRR3fnTxHnWJ5h7ytJV3Smj5QbbD48RXVMdnNbzQ";

  const storage = new Web3Storage({ token });
  const obj = { name: name }
  const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })

  const files = [
    // new File(['contents-of-file-1'], 'plain-utf8.txt'),
    new File([blob], 'hello.json'),
    image
  ]

  const cid = await storage.put(files);
  // console.log('https://dweb.link/ipfs/'+cid);
  const metadataURI = cid;

  const res = await storage.get(cid);
  const res_files = await res.files();

  await window.ethereum.request({ method: "eth_requestAccounts" });
  await fundFactoryContract.createFundMeContract(metadataURI, parseInt(goal));
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

  return { owner, metadataURI, goal, bal };
}

export {
  registerCrowdFund,
  fetchCrowdFunds,
  transferToContract,
  getCrowdFundDetails,
};
