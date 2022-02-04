const NFTFactory = artifacts.require('TechpropheciesNFTFactory');
let minter;

beforeEach(async () => {

    const nftfactory = artifacts.require('TechpropheciesNFTFactory');
    minter = await nftfactory.deployed();

});

contract('Techprophecies Contract',(accounts) => {

  it('los contratos deben desplegarse a la red', () => {
        
        const address = minter.address;
        console.log("Address es", address);

  });

  it('debe mintear', async() => {
        
    await minter.setListingPrice('100000');
    await minter.setBeneficiary(accounts[1]);
    
    await minter.setCouponOwner(accounts[3]);

    const listingPrice = await minter.listingPrice.call();

    const couponOwner = await minter.couponOwner(accounts[3]);
    const notCouponOwner = await minter.couponOwner(accounts[4]);

    console.log("Coupon Owner 1 es", couponOwner);
    console.log("Coupon Owner 2 es", notCouponOwner);

    await minter.createToken("https://facebook.com", { from: accounts[2], value: listingPrice});
    await minter.createToken("https://google.com", { from: accounts[0]});
    await minter.createToken("https://pinterest.com", { from: accounts[3]});
    
    /*
    await minter.createToken("https://instagram.com", { from: accounts[1]});
    await minter.createToken("https://twitter.com", { from: accounts[4]});
    */

    const ownsToken1 = await minter.ownerOf(1);
    const ownsToken2 = await minter.ownerOf(2);
    const ownsToken3 = await minter.ownerOf(3);

    /*


*/
    console.log("Owner of Token 1", ownsToken1);
    console.log("Owner of Token 2", ownsToken2);
    console.log("Owner of Token 3", ownsToken3)

    /*


    */

    const tokenURI1 = await minter.tokenURI(1);
    const tokenURI2 = await minter.tokenURI(2);
    const tokenURI3 = await minter.tokenURI(3);

    /*


    */

    console.log("TokenURI 1", tokenURI1);
    console.log("TokenURI 2", tokenURI2);
    console.log("TokenURI 3", tokenURI3)
   /*


*/

});

});
