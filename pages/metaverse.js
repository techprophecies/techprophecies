import Link from 'next/link';
import {useCallback, useRef, useState} from 'react';
import styled from 'styled-components';

import EnterVr from '../components/EnterVr';

const FrameStyles = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
    opacity: 0;
    transition: opacity 480ms ease;
  }
  iframe.is-on {
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    iframe {
      opacity: 1;
      transition: none;
    }
  }
  .overlay {
    position: absolute;
    top: max(12px, env(safe-area-inset-top));
    left: max(12px, env(safe-area-inset-left));
    right: max(12px, env(safe-area-inset-right));
    z-index: 10;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 8px;
    pointer-events: none;
  }
  @media (max-width: 40em) {
    .overlay a {
      font-size: 12px;
      padding: 8px 8px;
      letter-spacing: 0.06em;
    }
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
  const frame = useRef(null);
  const [ready, setReady] = useState(false);

  const enterVr = useCallback(() => {
    const iframe = frame.current;
    if (!iframe) return;
    try {
      const scene = iframe.contentDocument && iframe.contentDocument.querySelector('a-scene');
      if (scene && typeof scene.enterVR === 'function') {
        scene.enterVR();
      }
    } catch (error) {
      // Same-origin only; native A-Frame control remains as fallback.
    }
  }, []);

  const onFrameLoad = useCallback(() => {
    const iframe = frame.current;
    const scene =
      iframe && iframe.contentDocument && iframe.contentDocument.querySelector('a-scene');
    if (!scene) {
      setReady(true);
      return;
    }
    if (scene.hasLoaded) {
      setReady(true);
      return;
    }
    scene.addEventListener('loaded', () => setReady(true), {once: true});
  }, []);

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
      <EnterVr onClick={enterVr} label="Enter VR" />
      <iframe
        ref={frame}
        className={ready ? 'is-on' : undefined}
        src="/metaverse/index.html"
        title="Tech Prophecies space"
        allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
        onLoad={onFrameLoad}
      />
    </FrameStyles>
  );
}
