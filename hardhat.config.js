// require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require('@openzeppelin/hardhat-defender')
require('@openzeppelin/hardhat-upgrades')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://goerli.prylabs.net',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  defender: {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  }
};
