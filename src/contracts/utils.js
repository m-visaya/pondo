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
