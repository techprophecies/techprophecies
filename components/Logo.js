import styled from 'styled-components';

const LogoStyles = styled.div`
  height: 50px;
  background: red;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: var(--theme-ui-colors-black-100, #000000);
  .logo-wrapper {
    display: flex;
    justify-content: center;
  }
  .logo-wrapper:hover {
    cursor: pointer;
  }
  .logo {
    height: 160%;
    top: -10px;
    position: relative;
  }
`;

export default function Logo() {
  return (
    <LogoStyles>
      <div className="logo-wrapper">
        <img className="logo"
          src="./assets/icons/tech-prophecies-logo.png"
          alt="tech prohecies nft"
        />
      </div>
    </LogoStyles>
  );
}
