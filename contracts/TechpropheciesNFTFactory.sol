//SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
import "./@rarible/royalties/contracts/LibPart.sol";
import "./@rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol";
import "./@rarible/royalties/contracts/LibRoyaltiesV2.sol";
*/

/**
 *  @dev Implementación de https://eips.ethereum.org/EIPS/eip-721[ERC721]
    Desarrollado por Emmanuel Martínez.

    ████████╗███████╗ ██████╗██╗  ██╗    ██████╗ ██████╗  ██████╗ ██████╗ ██╗  ██╗███████╗ ██████╗██╗███████╗███████╗
╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██║  ██║██╔════╝██╔════╝██║██╔════╝██╔════╝
   ██║   █████╗  ██║     ███████║    ██████╔╝██████╔╝██║   ██║██████╔╝███████║█████╗  ██║     ██║█████╗  ███████╗
   ██║   ██╔══╝  ██║     ██╔══██║    ██╔═══╝ ██╔══██╗██║   ██║██╔═══╝ ██╔══██║██╔══╝  ██║     ██║██╔══╝  ╚════██║
   ██║   ███████╗╚██████╗██║  ██║    ██║     ██║  ██║╚██████╔╝██║     ██║  ██║███████╗╚██████╗██║███████╗███████║
  ▒╚═╝ ░ ╚══════╝ ╚═════╝╚═╝ ░╚═╝   ░╚═╝   ▒█╚═╝  ╚═╝█╚═════╝░╚═╝██▓▒░╚═╝▒ ╚═╝╚══════╝▓╚═════╝╚═╝╚══════╝╚══════╝▒
  ▒ ░░   ░░ ▒░ ░░ ░▒ ▒  ░ ▒ ░░▒░▒   ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░ ▒░▒░▒░ ▒▓▒░ ░  ░ ▒ ░░▒░▒░░ ▒░ ░░ ░▒ ▒  ░░▓  ░░ ▒░ ░▒ ▒▓▒ ▒ ░
    ░     ░ ░  ░  ░  ▒    ▒ ░▒░ ░   ░▒ ░       ░▒ ░ ▒░  ░ ▒ ▒░ ░▒ ░      ▒ ░▒░ ░ ░ ░  ░  ░  ▒    ▒ ░ ░ ░  ░░ ░▒  ░ ░
  ░         ░   ░         ░  ░░ ░   ░░         ░░   ░ ░ ░ ░ ▒  ░░        ░  ░░ ░   ░   ░         ▒ ░   ░   ░  ░  ░  
            ░  ░░ ░       ░  ░  ░               ░         ░ ░            ░  ░  ░   ░  ░░ ░       ░     ░  ░      ░  

 */

contract TechpropheciesNFTFactory is ERC721URIStorage, Ownable{


    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint128 public listingPrice;

    mapping (address => bool) public couponOwner;
    address contractOwner;
    address payable beneficiary;
    

    constructor() ERC721("Tech Prophecies","TP"){
                contractOwner = msg.sender;
                couponOwner[msg.sender] = true;
    }

    function createToken(string memory tokenURI) public payable  {

        if (couponOwner[msg.sender] == true){   
                _tokenIds.increment();    
                _mint(msg.sender, _tokenIds.current());
                _setTokenURI(_tokenIds.current(), tokenURI);
                return;
        }

        require(msg.value >= listingPrice, "The price must be at least the listing price");
        beneficiary.transfer(msg.value);
        _tokenIds.increment();    
        _mint(msg.sender, _tokenIds.current());
        _setTokenURI(_tokenIds.current(), tokenURI);
        return;

    }

    function setListingPrice(uint128 _listPrice) external {

            listingPrice = _listPrice;

    }

    function setBeneficiary(address payable _beneficiary) external {

            beneficiary = _beneficiary;

    }

    function setCouponOwner(address _couponOwner) external {

            couponOwner[_couponOwner] = true;

    }

    /*

    function _setRoyalties(uint _tokenId, address payable _royaltiesReceipientAddress, uint96 _percentageBasisPoints) public onlyOwner {
        LibPart.Part[] memory _royalties = new LibPart.Part[](1);
        _royalties[0].value = _percentageBasisPoints;
        _royalties[0].account = _royaltiesReceipientAddress;
        _saveRoyalties(_tokenId, _royalties);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721) returns (bool) {
        if(interfaceId == LibRoyaltiesV2._INTERFACE_ID_ROYALTIES) {
            return true;
        }
        return super.supportsInterface(interfaceId);
    }

    */

}
