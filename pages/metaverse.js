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
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 16px;
    pointer-events: none;
  }
  .overlay a {
    pointer-events: auto;
    color: #fff;
    font-family: var(--st--fonts-body);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  .overlay a:hover {
    color: #00fff7;
  }
  .overlay img {
    height: 36px;
    width: auto;
    display: block;
  }
`;

export default function MetaversePage() {
  return (
    <FrameStyles>
      <div className="overlay">
        <Link href="/">
          <a>
            <img src="/assets/icons/tech-prophecies-logo.png" alt="Tech Prophecies" />
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
