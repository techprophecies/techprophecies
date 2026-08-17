import Link from 'next/link';
import styled from 'styled-components';

const MenuStyles = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
  flex-wrap: wrap;
  @media (min-width: 52em) {
    flex-basis: auto;
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
      <Link href="/metaverse">Metaverse</Link>
      <Link href="/about">About</Link>
    </MenuStyles>
  );
}
