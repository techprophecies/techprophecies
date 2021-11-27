//SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 *  @dev Implementación de https://eips.ethereum.org/EIPS/eip-721[ERC721]
    Desarrollado por Emmanuel Martínez.
 */

contract NeuralChapelNFTFactory is ERC721URIStorage, Ownable{


    //Esta utilidad incrementa los ID
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Tech Prophecies","TPT") onlyOwner{
            contractAddress = marketplaceAddress;

    }

    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;


    }

}