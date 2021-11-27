const NFTMarket = artifacts.require('NeuralChapelMarket');
const NFTFactory = artifacts.require('NeuralChapelNFTFactory');

let iNFTMarketAddress;
let iNFTFactoryAddress;
let iNFTMarket;
let iNFTFactory;

beforeEach(async () => {
  iNFTMarket = await NFTMarket.deployed();
  iNFTFactory = await NFTFactory.deployed();

  iNFTMarketAddress = iNFTMarket.address;
  iNFTFactoryAddress = iNFTFactory.address;
});

contract('Neural Chapel Market', async (accounts) => {
  it('los contratos deben desplegarse a la red', () => {
    assert.ok(iNFTMarketAddress);
    console.log('Neural Chapel Market Address', iNFTMarketAddress);

    assert.ok(iNFTFactoryAddress);
    console.log('Neural Chapel NFT Factory Address', iNFTFactoryAddress);
  });

  it('debe crear y ejecutar una market sale', async () => {
    const Market = await artifacts.require('NeuralChapelMarket');
    const market = await Market.deployed();
    const marketAddress = market.address;

    const NFT = await artifacts.require('NeuralChapelNFTFactory');
    const nft = await NFT.deployed(marketAddress);
    const nftAddress = nft.address;

    const auctionPrice = web3.utils.fromWei('100000000000000000000', 'ether');

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    await nft.createToken(
      'https://bafkreic6blqnewlqrorovj476nh3avksvvk7eqgkqe6c234eoud76kiila.ipfs.dweb.link/');
    await nft.createToken(
      'https://bafkreifnsm7is7fa3bi7luugb6lbkak3smvuvlozallxivykougoynwjeq.ipfs.dweb.link/'
    );

    await market.createMarketItem(nftAddress, 1, auctionPrice, {
      value: listingPrice,
    });
    await market.createMarketItem(nftAddress, 2, auctionPrice, {
      value: listingPrice,
    });

    [_, buyerAddress] = accounts;

    await market.createMarketSale(nftAddress, 1, {
      from: buyerAddress,
      value: auctionPrice
    });
    let items = await market.fetchMarketItems();
    items = await Promise.all(
      items.map(async (i) => {
        const tokenUri = await nft.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        };
        return item;
      }))

    console.log('items', items);
  });
});
