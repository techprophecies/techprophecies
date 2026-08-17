import styled from 'styled-components';

const SIZES = {
  sm: 36,
  md: 56,
  lg: 96,
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  pointer-events: none;

  .halo {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid rgba(0, 255, 247, 0.35);
    box-shadow: 0 0 18px rgba(0, 255, 247, 0.22);
    pointer-events: none;
  }

  img {
    position: relative;
    z-index: 1;
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 0 12px rgba(0, 255, 247, 0.55));
  }

  &.is-pulse .halo {
    animation: mark-halo 1.6s ease-in-out infinite;
  }

  &.is-pulse img {
    animation: mark-pulse 1.2s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .halo,
    img {
      animation: none !important;
    }
  }

  @keyframes mark-pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.85;
    }
    50% {
      transform: scale(1.06);
      opacity: 1;
    }
  }

  @keyframes mark-halo {
    0%,
    100% {
      transform: scale(0.94);
      opacity: 0.55;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default function MarkLoader({size = 'md', pulse = true}) {
  const px = SIZES[size] || SIZES.md;
  return (
    <Wrap
      className={pulse ? 'is-pulse' : undefined}
      $size={px}
      role="status"
      aria-label="Loading"
    >
      <span className="halo" aria-hidden="true" />
      <img src="/assets/icons/tech-prophecies-logo.png" alt="" />
    </Wrap>
  );
}
