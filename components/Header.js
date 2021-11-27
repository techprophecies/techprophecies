import Link from 'next/link';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import Wallet from './Wallet';

const HeaderStyles = styled.header`
  margin: 0;
  min-width: 0;
  position: relative;
  .header-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
  }
  .header-wrapper {
    margin: 0;
    min-width: 0;
    position: relative;
    left: 0;
    z-index: 999;
    width: 100%;
  }
  .header-inner {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
  }
  .menu-wrapper {
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 10px solid var(--black, black);
  }
`;

export default function Header({ children }) {
  return (
    <HeaderStyles>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-inner">
            <div className="menu-wrapper">
              <Logo />
              <Search />
              <Wallet />
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
