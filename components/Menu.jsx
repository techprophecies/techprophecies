import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const MenuStyles = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  gap: 2px;

  a {
    position: relative;
    font-family: 'TechProphecy', serif;
    font-size: 15px;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.62);
    text-decoration: none;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 10px 14px;
    overflow: hidden;
    transition: color 180ms ease, letter-spacing 180ms ease,
      text-shadow 180ms ease;
  }

  a::after {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 6px;
    height: 1px;
    background: #00fff7;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  a:hover,
  a:focus-visible {
    color: #00fff7;
    letter-spacing: 0.18em;
    text-shadow: 0 0 12px rgba(0, 255, 247, 0.45);
    outline: none;
  }

  a:hover::after,
  a:focus-visible::after,
  a[aria-current='page']::after {
    transform: scaleX(1);
  }

  a[aria-current='page'] {
    color: #ffffff;
  }

  @media (max-width: 40em) {
    flex-wrap: wrap;
    justify-content: flex-end;

    a {
      font-size: 13px;
      padding: 8px 10px;
      letter-spacing: 0.08em;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    a,
    a::after {
      transition: none;
    }
  }
`;

export default function Menu() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <MenuStyles>
      <Link href="/#grid-header">
        <a aria-current={path === '/' ? 'page' : undefined}>Gallery</a>
      </Link>
      <Link href="/metaverse">
        <a aria-current={path === '/metaverse' ? 'page' : undefined}>
          Metaverse
        </a>
      </Link>
      <Link href="/about">
        <a aria-current={path === '/about' ? 'page' : undefined}>About</a>
      </Link>
    </MenuStyles>
  );
}
