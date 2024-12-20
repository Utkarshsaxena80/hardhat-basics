# Hardhat Basics

This repository is a foundational guide to working with Hardhat, a powerful Ethereum development environment. Hardhat enables developers to compile, deploy, test, and debug Ethereum smart contracts effortlessly.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

The following npm scripts are available:

- **Compile Contracts**:
  ```bash
  npx hardhat compile
  ```
  Compiles the smart contracts in the `contracts` directory.

- **Run Tests**:
  ```bash
  npx hardhat test
  ```
  Executes tests in the `test` directory.

- **Deploy Contracts**:
  ```bash
  npx hardhat run scripts/deploy.js
  ```
  Deploys the contracts using the specified network configuration.

- **Lint Code**:
  ```bash
  npm run lint
  ```
  Lints the codebase using ESLint.

## Project Structure

```
.
├── contracts       # Solidity smart contracts
├── scripts         # Deployment and utility scripts
├── test            # Mocha/Chai tests for smart contracts
├── hardhat.config.js  # Hardhat configuration file
└── package.json    # Project dependencies and scripts
```

## Configuration

The `hardhat.config.js` file is used to configure the Hardhat environment. Update the file to specify network configurations, Solidity versions, and other settings.

Example:
```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    goerli: {
      url: "<INFURA_OR_ALCHEMY_API_URL>",
      accounts: ["<PRIVATE_KEY>"]
    }
  }
};
```

## Testing

Write tests in the `test` directory using Mocha and Chai. Example test structure:

```javascript
const { expect } = require("chai");

describe("ContractName", function () {
  it("should deploy correctly", async function () {
    const Contract = await ethers.getContractFactory("ContractName");
    const contract = await Contract.deploy();
    await contract.deployed();

    expect(await contract.someFunction()).to.equal(expectedValue);
  });
});
```

## Deploying Contracts

Use the `scripts/deploy.js` file to deploy contracts. Example:

```javascript
const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("ContractName");
  const contract = await Contract.deploy();

  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Run the deployment script:
```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [Solidity Documentation](https://soliditylang.org/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
