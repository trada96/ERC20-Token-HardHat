import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Erc20 Token", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployToken() {
   
    const [account_owner, account_one, account_two, account_three] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy("ICE TEA", "ICETEA", 1000000000);

    return { token, account_owner, account_one, account_two, account_three};
  }

  describe("Deployment", function () {
    it("Token deployment", async function(){
      const { token, account_owner, account_one, account_two, account_three} = await loadFixture(deployToken);
      const tokenName = await token.name();
      const tokenSymbol = await token.symbol();
      const totalSupply = await token.totalSupply();

      expect(tokenName).to.equal("ICE TEA");
      expect(tokenSymbol).to.equal("ICETEA");
      expect(totalSupply).to.equal(1000000000);

    }); 
  }); 
});
