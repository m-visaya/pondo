import { fundFactoryContract, provider, fundMeABI } from "./constants";
import { ethers } from "ethers";

const signer = provider.getSigner();

async function registerCrowdFund(metadataURI, goal) {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  await fundFactoryContract.createFundMeContract(metadataURI, parseInt(goal));
}

async function fetchCrowdFunds() {
  return await fundFactoryContract.getFundMeContracts();
}

async function transferToContract(value) {
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
  //   console.log(goal);

  return { owner, metadataURI, goal };
}

export {
  registerCrowdFund,
  fetchCrowdFunds,
  transferToContract,
  getCrowdFundDetails,
};
