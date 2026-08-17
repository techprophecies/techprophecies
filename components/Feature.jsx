import {useCallback, useRef} from 'react';
import styled from 'styled-components';

import {works} from '../works';
import Background from './Background';

const FeatureStyles = styled.section`
  position: relative;
  z-index: 5;
  overflow: hidden;
  min-height: auto;
  --px: 0;
  --py: 0;

  .card-background-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .feature-wrapper {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 32px;
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;
    min-height: 0;
    padding: 40px 16px;
  }

  @media (min-width: 52em) {
    min-height: calc(80vh - 86px);
    .feature-wrapper {
      grid-template-columns: 1.05fr 0.95fr;
      gap: 48px;
      min-height: calc(80vh - 86px);
      padding: 96px 24px;
    }
  }

  @media (min-width: 80em) {
    .feature-wrapper {
      max-width: 1760px;
      gap: 72px;
    }
  }

  .feature-still {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: inherit;
    appearance: none;
    position: relative;
    transform: perspective(1100px) rotateY(calc(var(--px, 0) * 7deg))
      rotateX(calc(var(--py, 0) * -7deg))
      translate3d(calc(var(--px, 0) * 10px), calc(var(--py, 0) * 8px), 0);
    transition: transform 120ms linear, filter 280ms ease;
    filter: drop-shadow(0 18px 32px rgba(0, 0, 0, 0.55));
  }

  .feature-still:hover,
  .feature-still:focus-visible {
    outline: none;
    filter: drop-shadow(0 18px 32px rgba(0, 0, 0, 0.55))
      drop-shadow(0 0 18px rgba(0, 255, 247, 0.28));
  }

  .frame {
    position: relative;
    overflow: hidden;
    outline: 1px solid transparent;
    transition: outline-color 280ms ease;
  }

  .feature-still:hover .frame,
  .feature-still:focus-visible .frame {
    outline-color: rgba(0, 255, 247, 0.55);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 1;
    object-fit: cover;
    background: #0c0c0c;
    transform: scale(1);
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .feature-still:hover img,
  .feature-still:focus-visible img {
    transform: scale(1.04);
  }

  .open-hint {
    position: absolute;
    right: 12px;
    bottom: 12px;
    z-index: 2;
    color: #fff;
    font-family: var(--st--fonts-body);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.45);
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.35);
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 220ms ease, transform 220ms ease, color 150ms ease,
      border-color 150ms ease;
  }

  .feature-still:hover .open-hint,
  .feature-still:focus-visible .open-hint {
    opacity: 1;
    transform: translateY(0);
  }

  .feature-still:hover .open-hint {
    color: #00fff7;
    border-color: #00fff7;
  }

  .label {
    color: #8bacda;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin: 0 0 16px;
    position: relative;
    z-index: 2;
  }

  .name {
    margin: 0 0 20px;
    color: #fff;
    font-family: 'TechProphecy', serif;
    font-size: clamp(1.6rem, 5vw, 2.6rem);
    font-weight: 200;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
    line-height: 1.05;
  }

  .verse {
    margin: 0;
    color: white;
    font-family: 'TechProphecy', serif;
    font-weight: 200;
    font-size: clamp(22px, 4.6vw, 56px);
    line-height: 1.15;
    letter-spacing: -0.02em;
    text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
    max-width: 18em;
  }

  @media (hover: none) {
    .open-hint {
      opacity: 1;
      transform: none;
    }
    .feature-still {
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .feature-still,
    img,
    .open-hint {
      transition: none;
      transform: none;
    }
  }
`;

export default function Feature({onOpen}) {
  const featured = works[0];
  const root = useRef(null);

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
    (event) => {
      setParallax(event.clientX, event.clientY);
    },
    [setParallax],
  );

  const onTouchMove = useCallback(
    (event) => {
      const touch = event.touches[0];
      if (touch) setParallax(touch.clientX, touch.clientY);
    },
    [setParallax],
  );

  const onLeave = useCallback(() => {
    const el = root.current;
    if (!el) return;
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
  }, []);

  const number = String(featured.id).padStart(2, '0');

  return (
    <FeatureStyles
      ref={root}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchMove={onTouchMove}
      onTouchEnd={onLeave}
    >
      <div className="card-background-wrapper">
        <Background />
      </div>
      <div className="feature-wrapper">
        <button
          type="button"
          className="feature-still"
          onClick={() => onOpen && onOpen(0)}
          aria-label={`${featured.name}. Open prophecy ${number}`}
        >
          <div className="frame">
            <img src={featured.image} alt="" />
            <span className="open-hint">Open</span>
          </div>
        </button>
        <div>
          <p className="label">
            Selected work · {number}
            {featured.rarity ? ` · ${featured.rarity}` : ''}
          </p>
          <h2 className="name">{featured.name}</h2>
          {featured.description ? (
            <p className="verse">{featured.description}</p>
          ) : null}
        </div>
      </div>
    </FeatureStyles>
  );
}
