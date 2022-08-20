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

const web3Prefix = " https://dweb.link/ipfs/";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU4MDMzMkE2MzQxY2MyMTZkQUFGMGE3NTc1MDA2MWVCMjFkYjNmZkMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA5NTkyODAyNjEsIm5hbWUiOiJwb25kb1Rva2VuIn0.Ewk0CHvTphTVlyeInpAi5T-qMiSDzZk367hFA5YUDMo";

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
