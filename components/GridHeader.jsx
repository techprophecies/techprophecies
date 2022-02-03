import React from 'react';

// CSS
import styled from 'styled-components';

// COMPONENTS
import {LoadingGlow} from '../components';

const GridHeaderStyles = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-bottom: solid 1px;
  border-color: var(--theme-ui-colors-black-10, #e6e6e6);
  margin-bottom: 24px;
  .grid-header-title-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-family: 'Roobert', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 600;
    font-size: 20px;
    -webkit-letter-spacing: -0.02em;
    -moz-letter-spacing: -0.02em;
    -ms-letter-spacing: -0.02em;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .grid-header-title-wrapper {
    margin: 0px;
    min-width: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .grid-header-title-wrapper span {
    color: white;
  }
  .grid-header-wrapper {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-top: 48px;
    padding-bottom: 24px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
  }
  .loading-glow-wrapper {
    width: 40px;
    height: 100%;
    background-color: red;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 40em) {
    .grid-header-wrapper {
      padding-top: 64px;
    }
  }
  @media screen and (min-width: 52em) {
    .grid-header-wrapper {
      padding-top: 96px;
    }
  }
  .grid-header-view-container {
    font-size: 18px;
    text-decoration: unset;
  }
  .grid-header-view-text {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--theme-ui-colors-black-60, #666666);
    -webkit-transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    font-size: 16px;
  }
  @media screen and (min-width: 40em) {
    .grid-header-view-text {
      font-size: 18px;
    }
  }
`;

export default function GridHeader() {
  return (
    <GridHeaderStyles id="grid-header">
      <div className="grid-header-wrapper">
        <div className="grid-header-title-container">
          <div className="grid-header-title-wrapper">
            <div className="loading-glow-wrapper">
              <LoadingGlow />
            </div>
            <span>Latest Collected</span>
          </div>
        </div>
        <a className="grid-header-view-container" href="">
          <div className="grid-header-view-text">View Unminted</div>
        </a>
      </div>
    </GridHeaderStyles>
  );
}
