import Link from 'next/link';
import styled from 'styled-components';

const LogoStyles = styled.div`
  height: 44px;
  width: 44px;
  flex: 0 0 44px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1),
      filter 220ms ease;
  }

  a:hover,
  a:focus-visible {
    transform: scale(1.08) rotate(-6deg);
    filter: drop-shadow(0 0 10px rgba(0, 255, 247, 0.45));
    outline: none;
  }

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  @media (prefers-reduced-motion: reduce) {
    a,
    a:hover {
      transition: none;
      transform: none;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles>
      <Link href="/">
        <a className="logo-wrapper" aria-label="Tech Prophecies home">
          <img
            src="/assets/icons/tech-prophecies-logo.png"
            alt=""
            width="40"
            height="40"
          />
        </a>
      </Link>
    </LogoStyles>
  );
}
