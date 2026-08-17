import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Symbol from './Symbol';
import EnterVr from './EnterVr';

const BannerStyles = styled.section`
  z-index: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  height: 100svh;
  min-height: 100svh;
  overflow: hidden;
  .space-frame {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    pointer-events: none;
    z-index: 0;
  }
  .enter-space {
    position: absolute;
    bottom: max(24px, env(safe-area-inset-bottom));
    left: 50%;
    transform: translateX(-50%);
    z-index: 700;
    color: #ffffff;
    font-family: 'TechProphecy', serif;
    font-size: clamp(16px, 2.4vw, 22px);
    font-weight: 200;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid rgba(0, 255, 247, 0.55);
    padding: 14px 28px;
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 22px rgba(0, 255, 247, 0.28);
    transition: color 180ms ease, border-color 180ms ease, background 180ms ease,
      box-shadow 180ms ease, transform 220ms cubic-bezier(0.23, 1, 0.32, 1),
      letter-spacing 180ms ease;
  }
  .enter-space:hover,
  .enter-space:focus-visible {
    color: #00fff7;
    border-color: #00fff7;
    background: rgba(0, 255, 247, 0.12);
    box-shadow: 0 0 34px rgba(0, 255, 247, 0.55);
    transform: translateX(-50%) scale(1.06);
    letter-spacing: 0.22em;
    outline: none;
  }
  .enter-space:active {
    transform: translateX(-50%) scale(0.97);
  }
  @media (max-width: 40em) {
    .enter-space {
      padding: 12px 18px;
      right: 84px;
      left: 16px;
      transform: none;
      text-align: center;
    }
    .enter-space:hover,
    .enter-space:focus-visible,
    .enter-space:active {
      transform: none;
    }
  }
  div {
    position: relative;
    display: inline-block;
    height: 100%;
  }
  div.text-wrapper {
    display: flex;
    align-items: flex-end;
    position: relative;
    display: inline-block;
    height: clamp(120px, 26vh, 225px);
    width: 100%;
    z-index: 700;
    pointer-events: none;
  }
  div.text-wrapper .enter-heading {
    pointer-events: auto;
  }
  div.text-wrapper > div,
  div.text-wrapper .enter-heading {
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-decoration: none;
    pointer-events: auto;
    z-index: 700;
  }
  .enter-heading .banner-heading {
    transition: filter 220ms ease, letter-spacing 220ms ease,
      transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .enter-heading:hover .banner-heading,
  .enter-heading:focus-visible .banner-heading {
    filter: drop-shadow(0 0 18px rgba(0, 255, 247, 0.7));
    letter-spacing: 0.16em;
    outline: none;
  }
  .enter-heading:active .banner-heading {
    transform: scale(0.98);
  }
  div.video-wrapper {
    background: green;
    overflow: hidden;
    height: 500px;
  }
  div.video-wrapper div[data-testid='hover-video-player-container'] {
    width: 100%;
  }
  div.video-wrapper video {
    width: 100%;
  }

  .banner-heading {
    font-size: clamp(28px, 9vw, 80px);
    font-family: 'TechProphecy', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    color: white;
    font-weight: 200;
    width: 80%;
    text-align: center;
    top: 30%;
    position: absolute;
    transition: translateY(-50%);
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    /* background: linear-gradient(#262626, white, #262626); */
    -webkit-background-clip: text;
    color: transparent;
  }
  #banner .banner-heading:nth-child(1) {
    z-index: 30;
  }
  #banner .banner-heading:nth-child(2) {
    z-index: 20;
    text-shadow: 1px 1px 0 #262626, 2px 2px 0 #262626, 3px 3px 0 #262626,
      4px 4px 0 #262626, 5px 5px 0 #262626, 1px 1px 0 #262626,
      6px 20px 20px rgba(0, 0, 0, 1), -1px -1px 0 #fff;
  }
  .shine {
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.5, #fff)
      ) 0 0 no-repeat;
    -webkit-background-size: 150px;
    color: rgba(255, 255, 255, 0.6);
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255, 255, 255, 0.9);
  }

  .chrome {
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.8, #fff)
      ) 0 0 no-repeat;
    background-image: -webkit-linear-gradient(
      -40deg,
      transparent 0%,
      transparent 40%,
      #fff 50%,
      transparent 60%,
      transparent 100%
    );
    -webkit-background-size: 200px;
    color: rgba(255, 255, 255, 0.6);
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255, 255, 255, 0.7);
  }
  @keyframes shine {
    0%,
    10% {
      background-position: -1200px;
    }
    20% {
      background-position: top left;
    }
    90% {
      background-position: top right;
    }
    100% {
      background-position: 1200px;
    }
  }

  @-webkit-keyframes shine {
    0%,
    10% {
      background-position: -1200px;
    }
    20% {
      background-position: top left;
    }
    90% {
      background-position: top right;
    }
    100% {
      background-position: 1200px;
    }
  }
  .symbol-wrapper {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    max-width: min(500px, 78vw);
    z-index: 1;
    pointer-events: none;
  }
`;

export default function Banner() {
  return (
    <BannerStyles id="banner">
      <iframe
        className="space-frame"
        src="/metaverse/index.html"
        title="Tech Prophecies space"
        tabIndex={-1}
      />
      <div className="text-wrapper">
        <div>
          <h3 className="banner-heading shine">TECH PROPHECIES</h3>
          <h3 className="banner-heading shine">TECH PROPHECIES</h3>
        </div>
        <Link href="/metaverse">
          <a className="enter-heading" aria-label="Enter the space">
            <h3 className="banner-heading chrome">ENTER THE SPACE</h3>
            <h3 className="banner-heading chrome">ENTER THE SPACE</h3>
          </a>
        </Link>
      </div>

      <div className="symbol-wrapper">
        <Symbol />
      </div>
      <Link href="/metaverse">
        <a className="enter-space">Enter the space</a>
      </Link>
      <EnterVr href="/metaverse" />
    </BannerStyles>
  );
}
