import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px 64px;
  color: #8a8a8a;
  font-family: 'TechProphecy', serif;
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  p {
    margin: 0 0 6px;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>Moises Sanabria and Fabiola Larios</p>
      <p>2021–22</p>
    </FooterStyles>
  );
}
