import styled from 'styled-components';
import web3 from 'web3';
const Web3 = require('web3');

let metamaskAccount;
let web3Metamask;

const WalletStyles = styled.div `
  .connect-wallet-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .connect-wallet-wrapper {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    -webkit-box-align: center;
    align-items: center;
    display: none;
  }
  @media screen and (min-width: 52em) {
    .connect-wallet-wrapper {
      display: flex;
    }
  }
  button.connect-wallet:hover {
    background-color: var(--theme-ui-colors-black-100, #000000);
    color: var(--theme-ui-colors-white-100, #ffffff);
    box-shadow: rgb(0 0 0 / 25%) 0px 8px 15px;
    transform: translateY(-2px);
  }
  button.connect-wallet {
    margin: 0px;
    min-width: 0px;
    appearance: none;
    text-align: center;
    line-height: inherit;
    text-decoration: none;
    will-change: transform;
    font-weight: 600;
    padding: 16px 24px;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    cursor: pointer;
    outline: none;
    background-color: var(--theme-ui-colors-black-100, #000000);
    color: var(--theme-ui-colors-white-100, #ffffff);
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: var(--theme-ui-colors-black-90, #1a1a1a);
    font-size: 18px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 999px;
    min-height: 46px;
    max-height: 46px;
  }
  @media screen and (min-width: 52em) {
    button.connect-wallet {
      min-height: 54px;
      max-height: 54px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
  @media screen and (min-width: 52em) {
    button.connect-wallet {
      padding: 16px 24px;
    }
  }
`;

export default function Wallet() {
  const connectButton = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      // We are in the browser and metamask is running.
      await window.ethereum.request({ method: 'eth_requestAccounts'});

      web3Metamask = await new Web3(window.ethereum);

      const web3MetamaskAccounts = await web3Metamask.eth.getAccounts();
      console.log('Welcome', web3MetamaskAccounts[0]);
    } else {
      // We are on the server *OR* the user is not running metamask
      const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/406424b64bc84d85b26c1bfadddca2ea'
      );
      web3Metamask = new Web3(provider);
    }
  };

  return (
    <WalletStyles>
      <div className="connect-wallet-wrapper">
        <button type="button" onClick={connectButton} className="connect-wallet">Connect Wallet</button>{' '}
      </div>{' '}
    </WalletStyles>
  );
}