# INSTALL

    - Step1: npm install --save-dev hardhat 
    - Step1: npx hardhat compile
    - Step2: npx hardhat test
    - Step(Optional): npx hardhat flatten > flattened.sol
    - Step3: npx hardhat run scripts/deploy.ts
    - Step3: npx hardhat verify --network testnet contract-address param1 param2 pram3

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
