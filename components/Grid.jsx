import {useEffect} from 'react';

import styled from 'styled-components';

// NEXT
import Image from 'next/image';

// CONSTANTS
import {artworks} from '../artworks';
import metadata from '../constants/metadata';

// COMPONENTS
import GridHeader from './GridHeader';
import Card from './Card';
import HoverVideoPlayer from 'react-hover-video-player';

const GridStyles = styled.section`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1600px;
  padding: 0 24px;
  position: relative;
  z-index: 4;
  @media screen and (min-width: 40em) {
    .css-u5ziy1 {
      font-size: 24px;
    }
  }
  .grid-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: grid;
    grid-gap: 3px;
    padding-bottom: 32px;
    gap: 16px;
  }
  @media screen and (min-width: 40em) {
    .grid-container {
      padding-bottom: 48px;
    }
  }
  @media screen and (min-width: 52em) {
    .grid-container {
      padding-bottom: 64px;
      gap: 32px;
    }
  }
  @media screen and (min-width: 64em) {
    .grid-container {
      padding-bottom: 96px;
    }
  }
  .grid-wrapper {
    position: relative;
    width: 100%;
    min-width: 0;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
    z-index: 4;
  }
  .grid-wrapper-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media (min-width: 40em) {
    .grid-wrapper-inner {
      padding-bottom: 48px;
    }
  }
  @media (min-width: 64em) {
    .grid-wrapper-inner {
      grid-gap: var(--st--space-6);
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 80em) {
    .grid-wrapper-inner {
      grid-gap: var(--st--space-7);
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default function Grid() {
  console.log(metadata.properties);

  const nfts = metadata.properties;

  return (
    <GridStyles>
      <GridHeader />
      <div className="grid-wrapper">
        <div className="grid-wrapper-inner">
          {nfts.map((img, i) => (
            <>
              {i < 8 ? (
                <div key={i}>
                  {/* <Image alt={i} width="512" height="512" src={img} /> */}
                  <Card />
                  {/* <HoverVideoPlayer
                    key={`nft-${i}`}
                    videoSrc={
                      'https://res.cloudinary.com/react-graphql-store/video/upload/v1633390167/32_hand-touch-world_ze4s5n.mp4'
                    }
                    pausedOverlay={
                      <img
                        src={img}
                        alt=""
                        style={{
                          // Make the image expand to cover the video's dimensions
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    }
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                  /> */}
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </GridStyles>
  );
}
