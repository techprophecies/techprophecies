import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import Video from './Video';
import {Symbol} from '../components';

const BannerStyles = styled.section`
  z-index: 10000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0 0 0;
  height: 600px;
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
    height: 225px;
    z-index: 500;
  }
  div.text-wrapper > div {
    position: relative;
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
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
    font-size: 80px;
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
    letter-spacing: 5px;
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
    max-width: 500px;
  }
`;

export default function Banner() {
  return (
    <BannerStyles id="banner">
      <div className="text-wrapper">
        <div>
          <h3 className="banner-heading shine">OWN A TECH PROPHECY</h3>
          <h3 className="banner-heading shine">OWN A TECH PROPHECY</h3>
        </div>
        <div>
          <h3 className="banner-heading chrome">ON THE BLOCKCHAIN</h3>
          <h3 className="banner-heading chrome">ON THE BLOCKCHAIN</h3>
        </div>
      </div>

      <div className="symbol-wrapper">
        <Symbol />
      </div>
      {/* <div className="video-wrapper">
        <Video vidUrl="https://res.cloudinary.com/react-graphql-store/video/upload/v1643166988/neural-chapel-test-ae_hwebjo.mp4" />
      </div> */}
    </BannerStyles>
  );
}
