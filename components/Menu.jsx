import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const MenuStyles = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 4px 8px;
  a {
    font-family: var(--st--fonts-body);
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.62);
    text-decoration: none;
    letter-spacing: 0.04em;
    padding: 6px 10px;
    transition: color 150ms ease;
  }
  a:hover,
  a[aria-current='page'] {
    color: #ffffff;
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
