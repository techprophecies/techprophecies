import Link from 'next/link';

// CSS
import styled from 'styled-components';

const MenuStyles = styled.nav`
  display: none;
  justify-content: center;
  flex-basis: 100%;
  @media (min-width: 52em) {
    display: flex;
    /* position: absolute;
    bottom: -46px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2; */
  }
  a {
    font-family: var(--st--fonts-body);
    font-size: var(--st--fontSizes-2);
    font-weight: 600;
    color: var(--st--colors-black60);
    text-decoration: none;
    transition: color var(--st--transitions-0) var(--st--transitions-ease);
    margin-left: var(--st--space-1);
    margin-right: var(--st--space-1);
    padding-left: var(--st--space-1);
    padding-right: var(--st--space-1);
  }
  a:hover {
    color: var(--st--colors-white100);
  }
`;

export default function Menu() {
  return (
    <MenuStyles>
      <Link href="/">Metaverse</Link>
      <Link href="/">About</Link>
      <Link href="/mint">Mint</Link>
    </MenuStyles>
  );
}
