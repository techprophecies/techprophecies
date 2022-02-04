//SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

//Autor: Emmanuel Martínez para Cutout Fest 2021//
/*@dev Los contratos de OpenZeppelin están auditados y heredan las interfaces implementadas
en EIP-721 https://eips.ethereum.org/EIPS/eip-721
*/

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

//@inheritance ReentrancyGuard protege de las reentrant calls https://blog.openzeppelin.com/reentrancy-after-istanbul/

contract NeuralChapelMarket is ReentrancyGuard{
    
    /*@inheritance Counters.Counter es una forma simple de incrementar o decrecer un counter
      Es muy útil para generar IDs y contabilizar actividades en el contrato
    */
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    //@typeof address payable agrega los métodos .transfer(..) and .send(..) en una address
    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor(){
            
            //@param payable(msg.sender) transforma la address msg.sender en payable
            owner = payable(msg.sender);
    }

    //@typeof struct es un tipo objeto donde podemos almacenar valores para cada
    //item del mercado.

    struct MarketItem{
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    /*
    @typeof indexed para eventos registrados te permitirán
    buscar estos eventos usando los parámetros indexados como filtros.
    */
     event  MarketItemCreated(

        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address payable seller,
        address payable owner,
        uint256 price,
        bool sold
    );

    //@dev Mapeamos cada nuevo MarketItem con un ID para trackearlo.
    mapping(uint256 => MarketItem) private idToMarketItem;

    function getListingPrice() public view returns (uint256){

        return listingPrice;

    }

    
    /*
    @dev Esta función conecta la dirección del contrato donde se mintean las piezas(con su respectivo ID)
    para crear un MarketItem.
    */
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();
        /*
        @params payable(address(0)) es la forma en la que asignamos un parámetro vacío
        a owner, por que no existe todavía un propietario en este punto. Cuando modificamos un
        struct necesitamos regresar un valor para cada valor declarado.
        */
        idToMarketItem[itemId] = MarketItem(
        itemId,
        nftContract,
        tokenId,
        payable(msg.sender),
        payable(address(0)),
        price,
        false
        );

        //@dev Transferimos la propiedad del NFT de CutoutNFTFactory al contrato CutoutMarket
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        }

    function createMarketSale(
      address nftContract,
      uint256 itemId
    ) public payable nonReentrant {
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;
        require(msg.value == price, "Please submit the asking price in order to complete the purchase");
        idToMarketItem[itemId].seller.transfer(msg.value);
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _itemsSold.increment();

        //@params Comisión que se lleva el propietario del contrato por venta
        payable(owner).transfer(listingPrice);

    }

    function fetchMarketItems() public view returns (MarketItem[] memory){
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint currentIndex = 0;
        
        //@dev Los memory array son necesariamente fixed. Se declara: array[](número de elementos)
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for(uint i = 0; i < itemCount; i++){

            if(idToMarketItem[i + 1].owner == address(0)){
                uint currentId = idToMarketItem[i+1].itemId;
                    MarketItem storage currentItem = idToMarketItem[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;

            }


        }

        return items;
    }

    function fetchMyNFTs() public view returns (MarketItem[] memory){
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++){
                if(idToMarketItem[i+1].owner == msg.sender){
                    itemCount += 1;
                }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

            for (uint i = 0; i <totalItemCount; i++){
                
                if (idToMarketItem[i+1].owner == msg.sender){

                    uint currentId = idToMarketItem[i+1].itemId;
                    MarketItem storage currentItem = idToMarketItem[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
                }

            }

            return items;

               
        }

        function fetchItemsCreated() public view returns (MarketItem[] memory){
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++){
                if(idToMarketItem[i+1].seller == msg.sender){
                    itemCount += 1;
                }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

            for (uint i = 0; i <totalItemCount; i++){
                
                if (idToMarketItem[i+1].seller == msg.sender){

                    uint currentId = idToMarketItem[i+1].itemId;
                    MarketItem storage currentItem = idToMarketItem[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
                }

            }

            return items;
          }

}
