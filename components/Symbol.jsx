// CSS
import styled from 'styled-components';

const SymbolStyles = styled.div`
  z-index: 100;
  .feature-symbol {
    width: 500px;
    height: 500px;
    position: relative;
    text-align: center;
    /* background: radial-gradient(transparent, white); */
    color: #ffffff73;
    border-radius: 50%;
    border: 1px solid white;
    /* -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, 5px 5px 15px 5px rgba(41, 63, 255, 0); */
    box-shadow: #fff 0 -1px 4px, #0010ba 0 -10px 20px, #84f3ff 0 10px 10px,
      cyan 0 -18px 40px, 5px 5px 15px 5px rgba(41, 63, 255, 0);
  }
  .feature-symbol-inner-wrapper {
    width: 400px;
    height: 400px;
    top: 50px;
    left: 50px;
    position: absolute;
    text-align: center;
    color: white;
    border-radius: 50%;
    border: 1px solid white;
  }
  .feature-symbol span {
    --units: 1;
    --noOfItems: 13;
    --rotationUnit: calc((1turn / var(--noOfItems)) * var(--units, 1));
    position: absolute;
    width: calc(100%);
    height: calc(100%);
    top: 0;
    left: 0;
    font-size: 36px;
    transform: rotate(var(--rotationUnit));
    transform-origin: center;

    &:nth-child(2) {
      --units: 2;
    }
    &:nth-child(3) {
      --units: 3;
    }
    &:nth-child(4) {
      --units: 4;
    }
    &:nth-child(5) {
      --units: 5;
    }
    &:nth-child(6) {
      --units: 6;
    }
    &:nth-child(7) {
      --units: 7;
    }
    &:nth-child(8) {
      --units: 8;
    }
    &:nth-child(9) {
      --units: 9;
    }
    &:nth-child(10) {
      --units: 10;
    }
    &:nth-child(11) {
      --units: 11;
    }
    &:nth-child(12) {
      --units: 12;
    }
    &:nth-child(13) {
      --units: 13;
    }
  }
  .triangle-wrapper {
    position: absolute;
    margin: 0px auto;
    left: 0;
    right: 0;
    z-index: 500;
    top: -60px;
  }
  .loader {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 300px;
  }
  .loader-wrapper {
    display: block;

    position: absolute;
    top: 50%;
    left: 50%;
    /* transform by half of its width & height */
    transform: translate(-50%, -50%);
  }
  .triangle {
    display: block;
    position: relative;
    width: 0;
    height: 0;
    border-color: transparent transparent #ffffff1f transparent;
    border-width: 0px 300px 500px 300px;
    border-style: solid;
    z-index: 100;
    // setting the transform center to be the center-top of the triangle
    transform-origin: 50% 66.66%;
    // transform: rotate(120deg);
    animation: spin 20s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Symbol() {
  return (
    <SymbolStyles>
      <div className="feature-symbol">
        <span>✢</span>
        <span>✥</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <span>❂</span>
        <span>❉</span>
        <span>✯</span>
        <span>✢</span>
        <span>✥</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <div className="feature-symbol-inner-wrapper"></div>
      </div>

      <div className="triangle-wrapper">
        <div className="loader">
          <div className="loader-wrapper">
            <div className="triangle"></div>
          </div>
        </div>
      </div>
    </SymbolStyles>
  );
}
