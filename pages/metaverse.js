import Link from 'next/link';
import styled from 'styled-components';

const FrameStyles = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
  .overlay {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 8px;
    pointer-events: none;
  }
  .overlay a {
    pointer-events: auto;
    color: rgba(255, 255, 255, 0.72);
    font-family: 'TechProphecy', serif;
    font-size: 15px;
    font-weight: 200;
    text-decoration: none;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 8px 12px;
    position: relative;
    transition: color 180ms ease, letter-spacing 180ms ease,
      text-shadow 180ms ease;
  }
  .overlay a::after {
    content: '';
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 4px;
    height: 1px;
    background: #00fff7;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .overlay a:hover,
  .overlay a:focus-visible {
    color: #00fff7;
    letter-spacing: 0.18em;
    text-shadow: 0 0 12px rgba(0, 255, 247, 0.45);
    outline: none;
  }
  .overlay a:hover::after,
  .overlay a:focus-visible::after {
    transform: scaleX(1);
  }
  .overlay .mark {
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay .mark::after {
    display: none;
  }
  .overlay .mark:hover {
    letter-spacing: 0;
    filter: drop-shadow(0 0 10px rgba(0, 255, 247, 0.45));
  }
  .overlay img {
    height: 36px;
    width: 36px;
    object-fit: contain;
    display: block;
  }
`;

export default function MetaversePage() {
  return (
    <FrameStyles>
      <div className="overlay">
        <Link href="/">
          <a className="mark" aria-label="Tech Prophecies home">
            <img src="/assets/icons/tech-prophecies-logo.png" alt="" />
          </a>
        </Link>
        <Link href="/">
          <a>Gallery</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <iframe
        src="/metaverse/index.html"
        title="Tech Prophecies space"
        allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
      />
    </FrameStyles>
  );
}
