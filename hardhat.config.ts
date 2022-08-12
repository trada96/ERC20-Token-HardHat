import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { mnemonic, api_key } = require('./secrets.json');


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
      localhost: {
      url: "http://127.0.0.1:8545"
          },
      hardhat: {
      },
      testnet: {
          url: "https://data-seed-prebsc-1-s1.binance.org:8545",
          chainId: 97,
          gasPrice: 20000000000,
          accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: api_key
    }
  }
};

export default config;
