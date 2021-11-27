import { useState, useEffect } from 'react';
import web3 from "web3";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useRouter } from 'next/router';


const Web3 = require("web3");
let web3Metamask;
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
        
        console.log(nftArray)
    
    
    });
    

    //const [fileUrl, setFileUrl] = useState(null);
    //const [formInput, updateFormInput] = useState({ price: '', name: '', description: ''});
    const router = useRouter();

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
        
        setFileUrl(url)

        } catch (e){
            console.log(e)

        }
    };

    const createItem = async ()=>{
        //const { name, description, price } = formInput;

        //if(!name || !description || !price || !fileUrl) return;

        /*
        const data = JSON.stringify({
            name, description, image: fileUrl
        });

        */

        const data = nftArray[0];

        try{
            const added = await client.add(data);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        
        createSale(url)

        } catch (error){
            console.log("Error al subir el archivo: ", error);

        }

    };

    const createSale = async (url)=> {

        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            // We are in the browser and metamask is running.
            window.ethereum.request({ method: "eth_requestAccounts" });
            web3Metamask = new Web3(window.ethereum);
          } else {
            // We are on the server *OR* the user is not running metamask
            const provider = new Web3.providers.HttpProvider(
              "https://rinkeby.infura.io/v3/406424b64bc84d85b26c1bfadddca2ea"
            );
            web3Metamask = new Web3(provider);
          }

          metamaskAccount = await web3Metamask.eth.getAccounts();

          const tokenContract = await new web3Metamask.eth.Contract(NeuralChapelNFTFactory.abi, nftaddress);
          let transaction = await tokenContract.methods.createToken(url).send({from: metamaskAccount[0]});
          let tx = await wait(transaction);

          let event = tx.events[0];
          let value = event.args[2];
          let tokenId = value.toNumber();

          const price = web3.utils.fromWei(formInput.price,'ether');

          const marketContract = await new web3Metamask.eth.Contract(NeuralChapelMarket.abi, nftmarketaddress);
          let listingPrice = await marketContract.methods.getListingPrice().call({from: metamaskAccount[0]});
          listingPrice = listingPrice.toString();

          transaction = await marketContract.methods.createMarketItem(nftaddress, tokenId, price).send({from: metamaskAccount[0], value: listingPrice});
          await wait(transaction);
          router.push('/')  
        
        }

        return(
            <div className="flex justify-center mt-32">
                <div className="w-1/2 flex flex-col pb-12 ">


                    <button
                    onClick={createItem}
                    className="font-bold py-2 mt-32 bg-black text-white rounded shadow-lg"
                    >
                    Mint
                    </button>

                </div>

            </div>

        )


}