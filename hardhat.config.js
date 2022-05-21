require("@nomiclabs/hardhat-waffle");
require("dotenv").config()



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    "optimism-kovan": {
      url: "https://kovan.optimism.io",
      accounts:[process.env.PRIVKEY]
    }
  }


};
