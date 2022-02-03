import styled, {createGlobalStyle} from 'styled-components';

import {Header} from '../components';

const GlobalStyles = createGlobalStyle`
:root {
      --balloon-border-radius: 16px;
      --balloon-color: hsla(0, 0%, 6%, 0.95);
      --balloon-text-color: #fff;
      --balloon-font-size: 1rem;
      --balloon-move: 2px;
    }
    :root {
      --reach-dialog: 1;
    }
    :root,
    .st--t-lkafsQ {
      --st--colors-black100: #000000;
      --st--colors-black95: #0d0d0d;
      --st--colors-black90: #1a1a1a;
      --st--colors-black80: #333333;
      --st--colors-black70: #4d4d4d;
      --st--colors-black60: #666666;
      --st--colors-black50: #7f7f7f;
      --st--colors-black40: #999999;
      --st--colors-black30: #b3b3b3;
      --st--colors-black20: #cccccc;
      --st--colors-black10: #e6e6e6;
      --st--colors-black5: #f2f2f2;
      --st--colors-white20: rgba(255, 255, 255, 0.2);
      --st--colors-white100: #ffffff;
      --st--colors-red100: #f93a3a;
      --st--colors-red10: #ffe9ea;
      --st--colors-green100: #24be74;
      --st--colors-green10: #e4f9ef;
      --st--colors-orange100: #f1c23e;
      --st--colors-blue100: #0101ff;
      --st--space-0: 0px;
      --st--space-1: 4px;
      --st--space-2: 8px;
      --st--space-3: 12px;
      --st--space-4: 16px;
      --st--space-5: 20px;
      --st--space-6: 24px;
      --st--space-7: 32px;
      --st--space-8: 48px;
      --st--space-9: 64px;
      --st--space-10: 96px;
      --st--space-11: 128px;
      --st--fontWeights-medium: 500;
      --st--fontWeights-semibold: 600;
      --st--fontWeights-body: var(--st--fontWeights-medium);
      --st--fontWeights-heading: var(--st--fontWeights-semibold);
      --st--fonts-body: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      --st--fonts-mono: "FormularMono", Consolas, "Andale Mono WT",
        "Andale Mono", "Lucida Console", "Lucida Sans Typewriter",
        "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono",
        "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
      --st--fonts-display: "Foundation Display", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      --st--fonts-roobert: "Roobert", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
      --st--fontSizes-0: 14px;
      --st--fontSizes-1: 16px;
      --st--fontSizes-2: 18px;
      --st--fontSizes-3: 24px;
      --st--fontSizes-4: 36px;
      --st--fontSizes-5: 46px;
      --st--fontSizes-6: 56px;
      --st--fontSizes-7: 66px;
      --st--fontSizes-8: 76px;
      --st--fontSizes-9: 86px;
      --st--fontSizes-13: 126px;
      --st--radii-0: 0px;
      --st--radii-1: 5px;
      --st--radii-2: 10px;
      --st--radii-3: 15px;
      --st--radii-round: 9999px;
      --st--shadows-0: 0px 10px 20px rgba(0, 0, 0, 0.05);
      --st--shadows-1: 0px 10px 20px rgba(0, 0, 0, 0.1);
      --st--shadows-2: 0px 15px 20px rgba(0, 0, 0, 0.15);
      --st--shadows-3: 0px 8px 15px rgba(0, 0, 0, 0.25);
      --st--shadows-stroke: inset 0 0 0 3px #000;
      --st--shadows-button: var(--st--shadows-3);
      --st--transitions-0: 100ms;
      --st--transitions-1: 300ms;
      --st--transitions-2: 500ms;
      --st--transitions-3: 1000ms;
      --st--transitions-ease: cubic-bezier(0.23, 1, 0.32, 1);
      --st--sizes-container: 1600px;
      --st--lineHeights-body: 1.7;
      --st--letterSpacings-mono: 0.0725em;
    }
    * {
      box-sizing: border-box;
    }
    *,
    :after,
    :before {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
    }
    @font-face {
      font-family: 'TechProphecy';
      src: url('./assets/fonts/CloisterBlack.woff');
    }
    @font-face {
      font-family: 'TechProphecy-Regular';
      src: url('./assets/fonts/LibreBaskerville-Regular.ttf');
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
    button,
    input,
    select,
    textarea {
      margin: 0;
    }
    body {
      margin: 0px;
      background-color: black;
      color: rgb(0, 0, 0);
      font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      -webkit-font-smoothing: antialiased;
      opacity: 1;
      transition: background-color 300ms ease-in-out 0s,
        opacity 800ms ease-in-out 0s;
      display: -moz-box;
      display: flex;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      flex-direction: column;
      -moz-box-flex: 1;
      flex-grow: 1;
    }
    .page-container {
      display: -moz-box;
      display: flex;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      flex-direction: column;
      -moz-box-flex: 1;
      flex-grow: 1;
    }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem 0;
`;

export default function Page({children}) {
  return (
    <div className="page-container">
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
