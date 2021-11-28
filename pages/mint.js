import styled from 'styled-components';
import { useState, useEffect } from 'react';
import web3 from "web3";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useRouter } from 'next/router';

const MintStyles = styled.div`
  display: none;
  flex: 1 1 0%;
  justify-content: center;
  position: relative;
  padding-top: 30%;

  @media (min-width: 52em) {
    display: block;
    padding-left: var(--st--space-7);
    padding-right: var(--st--space-7);
  }

  button {
    background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  button:hover{

    cursor: cell;
  }

  .loading {

    color: white;

  }


 

`;


const Web3 = require("web3");
let web3Metamask;
let metamaskAccounts 
let metamaskAccount;

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

import {
    nftaddress, nftmarketaddress
  } from "../config";

  import {
    nftarray
  } from "../nfts";

import NeuralChapelNFTFactory from '../build/contracts/NeuralChapelNFTFactory.json';
import NeuralChapelMarket from '../build/contracts/NeuralChapelMarket.json';


const nftArray = nftarray.properties;

export default function CreateItem (){
    useEffect(() => {    
        
        //console.log(nftArray);
        //console.log(nftArray[0].image)
    
    
    },[]);

    const randomNft = nftArray[Math.floor(Math.random() * nftArray.length)];
    
    //const url = nftArray[0].image;
    const [loadingState, setLoadingState] = useState('loaded')
    const [url, setUrl] = useState(null);
    
    const [nftMeta, updatenftMeta] = useState(JSON.stringify({
        name: randomNft.name, description: randomNft.description, image: randomNft.image
    }));
    const router = useRouter();
/*
    const onChange = async (e)=>{
        const file = nftArray[0].image;

        try{
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)

                }
            )
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        
        

        } catch (e){
            console.log(e)

        }
    };

    */

    const createItem = async ()=>{
         
        
        setLoadingState('not-loaded');

        const connectAccount = async()=>{

            try{

            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                // We are in the browser and metamask is running.
        
                await window.ethereum.request({ method: "eth_requestAccounts" });
                web3Metamask = new Web3(window.ethereum);
                metamaskAccounts = await web3Metamask.eth.getAccounts();
                metamaskAccount = metamaskAccounts[0];
                //console.log("MetamaskAccount", metamaskAccount);
        
              } else {
                // We are on the server *OR* the user is not running metamask
                const provider = new Web3.providers.HttpProvider(
                  "https://rinkeby.infura.io/v3/3be8ee0f25324e1cbcf6e35f00f5b3ce"
                );
                web3Metamask = new Web3(provider);
              }
        
            } catch (err){
        
                console.log(err)
        
            }
           

           
            }
        
        connectAccount();
        
        

        //const { name, description, image } = nftMeta;

        //setUrl(image);
 

        console.log("Data", nftMeta)


        try{
            const added = await client.add(nftMeta);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            console.log("Url", url);
            createSale(url)

        } catch (error){
            console.log("Error al subir el archivo: ", error);

        }

    };

    const createSale = async (url)=> {


        

          const tokenContract = await new web3Metamask.eth.Contract(NeuralChapelNFTFactory.abi, nftaddress);
          let transaction = await tokenContract.methods.createToken(url).send({from: metamaskAccount});
          setLoadingState('loaded');
          //console.log(transaction['events'])
          //console.log("Token Id", transaction['events'].Transfer.returnValues[2]);

          //let event = transaction.events[0];
          //let value = event.args[2];
          let tokenId = await transaction['events'].Transfer.returnValues[2];

          //const price = web3.utils.toWei(0.01,'ether');

          const marketContract = await new web3Metamask.eth.Contract(NeuralChapelMarket.abi, nftmarketaddress);
          //let listingPrice = await marketContract.methods.getListingPrice().call();
          //let listingPrice = price.toString();

         // transaction = await marketContract.methods.createMarketItem(nftaddress, tokenId, price).send({from: metamaskAccount, value: listingPrice});
         // console.log("Market Item", transaction)
          //await transaction.wait();
          router.push('/')  
        
        }

        if (loadingState === 'not-loaded') return (<MintStyles><h1 className="loading">Minting...</h1></MintStyles>)

        return(
            <MintStyles>


                    <button
                    
                    onClick={createItem} 
                    >
                    Mint
                    </button>

            

            </MintStyles>
        )


}