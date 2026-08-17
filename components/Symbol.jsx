// CSS
import styled from 'styled-components';

const SymbolStyles = styled.div`
  z-index: 100;
  --size: min(500px, 70vw, 58vh);
  width: var(--size);
  height: var(--size);
  margin: 0 auto;
  .feature-symbol {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    color: #ffffff73;
    border-radius: 50%;
    border: 1px solid white;
    box-shadow: #fff 0 -1px 4px, #0010ba 0 -10px 20px, #84f3ff 0 10px 10px,
      cyan 0 -18px 40px, 5px 5px 15px 5px rgba(41, 63, 255, 0);
  }
  .feature-symbol-inner-wrapper {
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
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
    font-size: clamp(14px, 4.5vw, 36px);
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
    top: calc(var(--size) * -0.12);
  }
  .loader {
    display: inline-block;
    position: relative;
    width: 100%;
    height: calc(var(--size) * 0.6);
  }
  .loader-wrapper {
    display: block;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .triangle {
    display: block;
    position: relative;
    width: 0;
    height: 0;
    border-color: transparent transparent #ffffff1f transparent;
    border-width: 0 calc(var(--size) * 0.6) var(--size) calc(var(--size) * 0.6);
    border-style: solid;
    z-index: 100;
    transform-origin: 50% 66.66%;
    animation: spin 20s infinite linear;
  }

  @media (prefers-reduced-motion: reduce) {
    .triangle {
      animation: none;
    }
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
