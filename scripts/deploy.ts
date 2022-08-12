import { ethers } from "hardhat";

async function main() {

  const Token = await ethers.getContractFactory("Token");
  const contract = await Token.deploy("ICE TEA", "ICETEA", 1000000000);

  // await Token.deployed();

  console.log("Token deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
