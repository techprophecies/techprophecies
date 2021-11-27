const NFTMarket = artifacts.require('NeuralChapelMarket');
const NFTFactory = artifacts.require('NeuralChapelNFTFactory');

module.exports = async (deployer) => {
  await deployer.deploy(NFTMarket);
  console.log('Esta es la dirección de NFT Market', NFTMarket.address);
  await deployer.deploy(NFTFactory, NFTMarket.address);
  console.log('Esta es la dirección de NFT Factory', NFTFactory.address);
};
