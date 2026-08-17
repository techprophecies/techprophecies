import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';

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
    max-width: 1760px;
    margin-left: auto;
    margin-right: auto;
    padding-left: max(16px, env(safe-area-inset-left));
    padding-right: max(16px, env(safe-area-inset-right));
    padding-top: max(12px, env(safe-area-inset-top));
    padding-bottom: 8px;
  }
  @media (min-width: 52em) {
    .header-inner {
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 16px;
    }
  }
  .menu-wrapper {
    margin: 0;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    gap: 12px;
    position: relative;
    min-height: 44px;
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

export default function Header() {
  return (
    <HeaderStyles>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-inner">
            <div className="menu-wrapper">
              <Logo />
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
