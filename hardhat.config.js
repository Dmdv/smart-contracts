require('dotenv').config();

require('@nomiclabs/hardhat-web3');
require('@nomiclabs/hardhat-truffle5');
require('hardhat-typechain');

const { task } = require('hardhat/config');
const { toWei } = require('web3').utils;

task('test', async (_, hre, runSuper) => {
  hre.accounts = await hre.web3.eth.getAccounts();
  const testFiles = _.testFiles.length ? _.testFiles : ['./test/index.js'];
  await runSuper({ testFiles });
});

const {
  KOVAN_ACCOUNT_KEY,
  KOVAN_PROVIDER_URL,
  MAINNET_ACCOUNT_KEY,
  MAINNET_PROVIDER_URL,
} = process.env;

const networks = {
  hardhat: {
    accounts: { count: 100, accountsBalance: toWei('100000') },
    allowUnlimitedContractSize: true,
    blockGasLimit: 12e9,
  },
};

if (process.env.TEST_ENV_FORK) {
  networks.hardhat.forking = { url: process.env.TEST_ENV_FORK };
}

if (process.env.MAINNET_PROVIDER_URL) {
  networks.mainnet = { accounts: [MAINNET_ACCOUNT_KEY], url: MAINNET_PROVIDER_URL };
}

if (process.env.KOVAN_PROVIDER_URL) {
  networks.kovan = { accounts: [KOVAN_ACCOUNT_KEY], url: KOVAN_PROVIDER_URL };
}

module.exports = {
  mocha: {
    exit: true,
    bail: true,
    recursive: false,
  },
  networks,
  solidity: {
    version: '0.5.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: 'types',
    target: 'truffle-v5',
  },
};
