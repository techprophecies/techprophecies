import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .footer-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin: 0;
  }
  .footer-links li a {
    font-size: 11px;
    color: rgb(255, 255, 255);
    font-family: 'TechProphecy-Regular';
    margin: 0;
  }
  .all-caps {
    border: none;
    color: rgb(255, 255, 255);
    font-size: 12px;
    text-transform: uppercase;
    background-color: transparent;
    padding: 0px;
  }
  .credits-ratings {
    font-size: 11px;
    color: rgb(255, 255, 255);
  }
  .copyright {
    font-size: 8px;
    color: rgb(226, 226, 226);
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul className="footer-links">
        <li>
          <a href="" target="_blank">
            PRIVACY POLICY
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            TERMS OF USE
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            AD CHOICES
          </a>
        </li>
        <li>
          <a className="all-caps">Cookies Settings</a>
        </li>
        <li>
          <a>CREDITS &amp; RATINGS</a>
        </li>
      </ul>
      <div className="copyright">
        <p>© MMXXII TECH PROPHECIES. ENT. ALL RIGHTS RESERVED.</p>
      </div>
    </FooterStyles>
  );
}
