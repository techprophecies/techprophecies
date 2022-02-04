const NFTFactory = artifacts.require('TechpropheciesNFTFactory');

module.exports = async (deployer) => {
  await deployer.deploy(NFTFactory);
};
