import CrowdFund from "./CrowdFund.sol/CrowdFund.json";
import CrowdFundFactory from "./CrowdFundFactory.sol/CrowdFundFactory.json";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage";

const factoryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const factoryABI = CrowdFundFactory.abi;
const fundMeABI = CrowdFund.abi;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const fundFactoryContract = new ethers.Contract(
  factoryAddress,
  factoryABI,
  signer
);

const fundMeContract = new ethers.Contract(factoryAddress, fundMeABI, provider);

const web3Prefix = "https://w3s.link/ipfs/";

const token = import.meta.env.VITE_WEB3KEY;

const storage = new Web3Storage({ token });

export {
  factoryAddress,
  factoryABI,
  fundMeABI,
  fundFactoryContract,
  fundMeContract,
  provider,
  web3Prefix,
  storage,
};
