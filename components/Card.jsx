import Link from 'next/link';
import styled from 'styled-components';

import Video from './Video';

const CardStyles = styled.div`
  margin: 0;
  /* width: 20vw;
  height: 20vw; */
  max-width: 300px;
  min-width: 0;
  border-radius: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex: 1 1 auto;
  background-color: var(--theme-ui-colors-white-100, #ffffff);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-flex: auto;
  -ms-flex: auto;
  flex: auto;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
  -webkit-transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  position: relative;
  will-change: transform;
  :hover {
    -webkit-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0px 10px 20px rgb(0 0 0 / 10%);
    cursor: pointer;
  }
  @media screen and (min-width: 40em) {
    border-radius: 10px;
  }
  a {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    text-indent: -9999rem;
  }
  .gradient-border {
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      rgba(78, 7, 46, 1) 0%,
      rgba(239, 98, 164, 1) 4%,
      rgba(75, 122, 152, 1) 9%,
      rgba(241, 175, 143, 1) 15%,
      rgba(0, 223, 0, 1) 30%,
      rgba(155, 69, 250, 1) 60%,
      rgba(88, 186, 250, 1) 67%,
      rgba(28, 141, 250, 1) 75%,
      rgba(28, 183, 180, 1) 83%,
      rgba(28, 183, 180, 1) 88%,
      rgba(184, 255, 207, 1) 100%
    ) !important;
  }
  .asset-container {
    position: relative;
  }
  .asset-wrapper {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: relative;
    overflow: hidden;
  }
  .asset-wrapper span {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .asset-wrapper-inner {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--theme-ui-colors-black-5, #f2f2f2);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  video.asset {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .verse-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    grid-gap: 24px;
    box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
    padding: 24px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  @media screen and (min-width: 40em) {
    display: grid;
  }
  .verse-container h3 {
    font-weight: 600;
    font-size: var(--st--fontSizes-3);
    font-family: var(--st--fonts-body);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .verse-writer {
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  @media (min-width: 320px) {
    /* main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transform: translateY(18vh);
    transform: translateY(18vh);
  } */
    .flex-body-container {
      /* display: -webkit-box;
    display: -ms-flexbox;
    display: flex; */
      /* -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column; */
      list-style-type: none;
      /* width: min-content; */
      padding: 1.5rem;
      border-radius: 15px;
      color: white;
      background-color: #14253d;
      -webkit-box-shadow: 8px 10px 0 10px #0c1627;
      box-shadow: 8px 10px 0 10px #0c1627;
    }
    .flex-body-container h1 {
      display: inline;
      /* margin-top: 1.5rem; */
    }
    .flex-body-container h1:hover {
      cursor: pointer;
      color: #00fff7;
    }
    .flex-body-container > img {
      border-radius: 10px;
      margin-bottom: 1.5rem;
    }
    .flex-body-container > img:hover {
      cursor: pointer;
    }
    .paragraph {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      color: #8bacda;
      font-size: 18px;
    }
    .icons {
      list-style-type: none;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 300;
    }
    .icons li:first-child {
      color: #00fff7;
      font-weight: 600;
    }
    .icons li:last-child {
      font-weight: 400;
    }
    .last-credits-container::after {
      content: '';
      display: block;
      height: 1px;
      margin: 1.5rem 0 1.5rem 0;
      background-color: #2f415b;
    }
    .last-credits {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: left;
      -ms-flex-pack: left;
      justify-content: left;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #8bacda;
      list-style-type: none;
      font-size: 18px;
    }
    .last-credits a {
      text-decoration: none;
      color: white;
    }
    .last-credits a:hover {
      color: #00fff7;
    }
    .last-credits li img {
      width: 3rem;
      border-radius: 100%;
      outline: 2px solid white;
      margin-right: 1.5rem;
    }
  }
`;

export default function Card() {
  return (
    <CardStyles>
      {/* <Link href="/">.</Link>
      <div className="asset-container">
        <span />
        <div className="asset-wrapper">
          <Video vidUrl="https://res.cloudinary.com/react-graphql-store/video/upload/v1633133436/61_keyboard_over_man_with_arms_and_computer_head_udhzus.mp4" />
        </div>
      </div>
      <div className="verse-container">
        <div className="verse-writer">
          <h3>COMPUTER MAN</h3>
          <div>
            Even thou I scroll through the uncanny valley of neural capitalism,
            I will fear no AI for your upvotes are with me, your likes, your
            replies they comfort me.
          </div>
          <div>— Sad Keanu 14:34</div>
        </div>
      </div>
      <div className="button-container" /> */}
      <div className="flex-body-container">
        <Video vidUrl="https://res.cloudinary.com/react-graphql-store/video/upload/v1633133436/61_keyboard_over_man_with_arms_and_computer_head_udhzus.mp4" />
        <h1>Tech Prophecy #98</h1>
        <div className="paragraph">
          <p>
            The soul in the machine seeked the truth and verified if the
            believers had the faith needed to reach the highest lights of
            computation.
          </p>
        </div>
        <div className="last-credits-container">
          <ul className="icons">
            <li>
              <img src="./assets/icons/icon-ethereum.svg" alt="ethereum-icon" />
              &nbsp; 0.041 ETH
            </li>
            <li>
              <img src="./assets/icons/icon-clock.svg" alt="clock-icon" />
              &nbsp; 3 days left{' '}
            </li>
          </ul>
        </div>

        <ul className="last-credits">
          <li>
            <a href="#!">
              <img
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103749/abraham_uuknth.png"
                alt="image-avatar"
              />
            </a>
          </li>
          <li>
            {' '}
            Creation of
            <a href="#" target="_blank">
              Jules Wyvern
            </a>
          </li>
        </ul>
        <ul className="last-credits">
          <li>Android</li>
          <li>Human</li>
          <li>Alien</li>
        </ul>
      </div>
    </CardStyles>
  );
}
