import Link from 'next/link';
import styled, {css, keyframes} from 'styled-components';

const pulse = keyframes`
  0%,
  100% {
    box-shadow: 0 0 14px rgba(0, 255, 247, 0.22);
  }
  50% {
    box-shadow: 0 0 26px rgba(0, 255, 247, 0.5);
  }
`;

const vrCss = css`
  position: absolute;
  right: max(16px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  z-index: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 72px;
  height: 72px;
  padding: 0;
  border: 1px solid rgba(0, 255, 247, 0.55);
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  pointer-events: auto;
  appearance: none;
  box-shadow: 0 0 18px rgba(0, 255, 247, 0.28);
  transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1),
    color 180ms ease, border-color 180ms ease, box-shadow 180ms ease,
    background 180ms ease;
  animation: ${pulse} 2.8s ease-in-out infinite;

  svg {
    width: 34px;
    height: 34px;
    display: block;
  }

  .vr-label {
    font-family: 'TechProphecy', serif;
    font-size: 11px;
    font-weight: 200;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    line-height: 1;
  }

  &:hover,
  &:focus-visible {
    color: #00fff7;
    border-color: #00fff7;
    background: rgba(0, 255, 247, 0.12);
    box-shadow: 0 0 28px rgba(0, 255, 247, 0.55);
    transform: scale(1.08);
    outline: none;
    animation: none;
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 40em) {
    width: 60px;
    height: 60px;
    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

const VrLink = styled.a`
  ${vrCss}
`;

const VrButton = styled.button`
  ${vrCss}
`;

function Goggles() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M3.6 7.2h16.8A1.8 1.8 0 0 1 22.2 9v6.2a1.8 1.8 0 0 1-1.8 1.8h-4.1c-.7 0-1.3-.3-1.7-.9L13.5 14c-.3-.5-.8-.8-1.5-.8s-1.2.3-1.5.8l-1.1 2.1c-.4.6-1 .9-1.7.9H3.6A1.8 1.8 0 0 1 1.8 15.2V9a1.8 1.8 0 0 1 1.8-1.8Zm4.2 7.1a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.4 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
      />
    </svg>
  );
}

function Mark() {
  return (
    <>
      <Goggles />
      <span className="vr-label">VR</span>
    </>
  );
}

export default function EnterVr({href, onClick, label = 'Enter VR space'}) {
  if (href) {
    return (
      <Link href={href}>
        <VrLink aria-label={label}>
          <Mark />
        </VrLink>
      </Link>
    );
  }

  return (
    <VrButton type="button" onClick={onClick} aria-label={label}>
      <Mark />
    </VrButton>
  );
}
