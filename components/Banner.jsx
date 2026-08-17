import {useCallback, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import Symbol from './Symbol';
import Background from './Background';

const BannerStyles = styled.section`
  z-index: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  height: 100svh;
  min-height: 100svh;
  overflow: hidden;
  --px: 0;
  --py: 0;
  background: #000;

  .hero-sky {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .enter-space {
    position: absolute;
    bottom: max(24px, env(safe-area-inset-bottom));
    left: 50%;
    transform: translateX(-50%);
    z-index: 600;
    color: #ffffff;
    font-family: var(--st--fonts-body);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.45);
    padding: 12px 20px;
    pointer-events: auto;
    background: transparent;
    cursor: pointer;
    appearance: none;
  }
  .enter-space:hover,
  .enter-space:focus-visible {
    color: #00fff7;
    border-color: #00fff7;
    outline: none;
  }
  div {
    position: relative;
    display: inline-block;
    height: 100%;
  }
  div.text-wrapper {
    display: flex;
    align-items: flex-end;
    position: relative;
    display: inline-block;
    height: clamp(120px, 26vh, 225px);
    width: 100%;
    z-index: 500;
  }
  div.text-wrapper > div {
    position: relative;
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .banner-heading {
    font-size: clamp(28px, 9vw, 80px);
    font-family: 'TechProphecy', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    color: white;
    font-weight: 200;
    width: 80%;
    text-align: center;
    top: 30%;
    position: absolute;
    transition: translateY(-50%);
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    -webkit-background-clip: text;
    color: transparent;
  }
  #banner .banner-heading:nth-child(1) {
    z-index: 30;
  }
  #banner .banner-heading:nth-child(2) {
    z-index: 20;
    text-shadow: 1px 1px 0 #262626, 2px 2px 0 #262626, 3px 3px 0 #262626,
      4px 4px 0 #262626, 5px 5px 0 #262626, 1px 1px 0 #262626,
      6px 20px 20px rgba(0, 0, 0, 1), -1px -1px 0 #fff;
  }
  .shine {
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.5, #fff)
      ) 0 0 no-repeat;
    -webkit-background-size: 150px;
    color: rgba(255, 255, 255, 0.6);
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255, 255, 255, 0.9);
  }

  .chrome {
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.8, #fff)
      ) 0 0 no-repeat;
    background-image: -webkit-linear-gradient(
      -40deg,
      transparent 0%,
      transparent 40%,
      #fff 50%,
      transparent 60%,
      transparent 100%
    );
    -webkit-background-size: 200px;
    color: rgba(255, 255, 255, 0.6);
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255, 255, 255, 0.7);
  }
  @keyframes shine {
    0%,
    10% {
      background-position: -1200px;
    }
    20% {
      background-position: top left;
    }
    90% {
      background-position: top right;
    }
    100% {
      background-position: 1200px;
    }
  }

  @-webkit-keyframes shine {
    0%,
    10% {
      background-position: -1200px;
    }
    20% {
      background-position: top left;
    }
    90% {
      background-position: top right;
    }
    100% {
      background-position: 1200px;
    }
  }
  .symbol-wrapper {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    max-width: min(500px, 78vw);
    z-index: 1;
    pointer-events: none;
  }

  .enter-overlay {
    position: fixed;
    inset: 0;
    z-index: 8000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    background: #000;
    pointer-events: none;
    animation: enter-fade 700ms ease forwards;
  }
  .enter-overlay .ring {
    width: min(160px, 28vw);
    height: min(160px, 28vw);
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 24px rgba(0, 255, 247, 0.45),
      inset 0 0 24px rgba(0, 255, 247, 0.2);
    animation: enter-pulse 700ms ease-in-out infinite;
  }
  .enter-overlay .line {
    width: min(220px, 50vw);
    height: 1px;
    background: #00fff7;
    box-shadow: 0 0 12px rgba(0, 255, 247, 0.7);
  }
  .enter-overlay p {
    margin: 0;
    color: #fff;
    font-family: 'TechProphecy', serif;
    font-size: clamp(1.4rem, 4vw, 2.2rem);
    font-weight: 200;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-shadow: 0 0 18px rgba(255, 255, 255, 0.45);
  }
  @keyframes enter-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes enter-pulse {
    0%,
    100% {
      transform: scale(0.94);
      opacity: 0.7;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .enter-overlay,
    .enter-overlay .ring {
      animation: none;
    }
  }
`;

const ENTER_MS = 700;

export default function Banner() {
  const router = useRouter();
  const root = useRef(null);
  const [entering, setEntering] = useState(false);

  const setParallax = useCallback((clientX, clientY) => {
    const el = root.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--px', x.toFixed(3));
    el.style.setProperty('--py', y.toFixed(3));
  }, []);

  const onMove = useCallback(
    (event) => setParallax(event.clientX, event.clientY),
    [setParallax],
  );

  const onLeave = useCallback(() => {
    const el = root.current;
    if (!el) return;
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
  }, []);

  const go = useCallback(() => {
    router.push('/metaverse');
  }, [router]);

  const onEnter = useCallback(
    (event) => {
      event.preventDefault();
      if (entering) return;
      const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        go();
        return;
      }
      setEntering(true);
    },
    [entering, go],
  );

  useEffect(() => {
    if (!entering) return undefined;
    const timer = window.setTimeout(go, ENTER_MS);
    return () => window.clearTimeout(timer);
  }, [entering, go]);

  return (
    <BannerStyles
      id="banner"
      ref={root}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="hero-sky">
        <Background />
      </div>
      <div className="text-wrapper">
        <div>
          <h3 className="banner-heading shine">TECH PROPHECIES</h3>
          <h3 className="banner-heading shine">TECH PROPHECIES</h3>
        </div>
        <div>
          <h3 className="banner-heading chrome">ENTER THE SPACE</h3>
          <h3 className="banner-heading chrome">ENTER THE SPACE</h3>
        </div>
      </div>

      <div className="symbol-wrapper">
        <Symbol />
      </div>
      <button
        type="button"
        className="enter-space"
        onClick={onEnter}
      >
        Enter space
      </button>
      {entering ? (
        <div className="enter-overlay" aria-live="assertive">
          <span className="ring" aria-hidden="true" />
          <span className="line" aria-hidden="true" />
          <p>Enter the space</p>
        </div>
      ) : null}
    </BannerStyles>
  );
}
