const hre = require("hardhat");

async function main() {
  const CrowdFundFactory = await hre.ethers.getContractFactory(
    "CrowdFundFactory"
  );
  const crowdFund = await CrowdFundFactory.deploy();

  await crowdFund.deployed();

  console.log("Contract deployed to:", crowdFund.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
