import {useCallback} from 'react';
import styled from 'styled-components';

import Video from './Video';

const CardStyles = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
  appearance: none;
  position: relative;
  --mx: 50%;
  --my: 80%;
  will-change: transform;
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    outline: none;
  }

  .frame {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
    background: #0c0c0c;
    box-shadow: 0 0 0 1px transparent;
    transition: box-shadow 280ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .frame,
  &:focus-visible .frame {
    box-shadow: 0 0 0 1px #00fff7, 0 0 28px rgba(0, 255, 247, 0.35);
  }

  .prophecy {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1);
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .hover-clip {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hover-clip > div,
  .hover-clip video,
  .hover-clip img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover .prophecy,
  &:focus-visible .prophecy {
    transform: scale(1.05);
  }

  .wash {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    background:
      radial-gradient(
        420px circle at var(--mx) var(--my),
        rgba(0, 255, 247, 0.22),
        transparent 55%
      ),
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0.94) 0%,
        rgba(0, 0, 0, 0.82) 28%,
        rgba(0, 0, 0, 0.4) 58%,
        rgba(0, 0, 0, 0.08) 82%,
        transparent 100%
      );
    transition: opacity 280ms ease;
  }

  &:hover .wash,
  &:focus-visible .wash {
    opacity: 1;
  }

  .verse {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin: 0;
    padding: 18px 14px 14px;
    color: #fff;
    font-family: 'TechProphecy', serif;
    font-size: clamp(13px, 2.4vw, 18px);
    font-weight: 200;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.45);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 280ms ease, transform 280ms ease;
    pointer-events: none;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover .verse,
  &:focus-visible .verse {
    opacity: 1;
    transform: translateY(0);
  }

  .meta {
    padding: 12px 0 4px;
  }

  .number {
    display: block;
    color: #8a8a8a;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .name {
    margin: 0;
    color: #fff;
    font-family: 'TechProphecy', serif;
    font-size: clamp(14px, 1.4vw, 16px);
    font-weight: 200;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.25;
  }

  .rarity {
    display: block;
    margin-top: 6px;
    color: #00fff7;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.8;
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
    &:hover .prophecy {
      transform: none;
    }
    .hover-clip {
      display: none;
    }
    .wash,
    .verse {
      opacity: 1;
      transform: none;
    }
    .wash {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.92) 0%,
        rgba(0, 0, 0, 0.55) 38%,
        transparent 72%
      );
    }
    .verse {
      -webkit-line-clamp: 4;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover,
    &:focus-visible {
      transform: none;
    }
    .prophecy,
    .verse,
    .wash {
      transition: none;
    }
    &:hover .prophecy,
    &:focus-visible .prophecy {
      transform: none;
    }
  }
`;

export default function Card({
  image,
  video,
  name,
  description,
  id,
  rarity,
  lazy = true,
  onOpen,
}) {
  const number = String(id).padStart(2, '0');

  const onMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--mx', `${x.toFixed(1)}%`);
    event.currentTarget.style.setProperty('--my', `${y.toFixed(1)}%`);
  }, []);

  return (
    <CardStyles
      type="button"
      onClick={() => onOpen && onOpen()}
      onMouseMove={onMove}
      aria-label={`${name}. Open prophecy ${number}`}
    >
      <div className="frame">
        <img
          className="prophecy"
          src={image}
          alt=""
          loading={lazy ? 'lazy' : 'eager'}
        />
        {video ? (
          <span className="hover-clip">
            <Video videoSrc={video} poster={image} className="prophecy" />
          </span>
        ) : null}
        <span className="wash" aria-hidden="true" />
        {description ? <p className="verse">{description}</p> : null}
      </div>
      <div className="meta">
        <span className="number">{number}</span>
        <span className="name">{name}</span>
        {rarity ? <span className="rarity">{rarity}</span> : null}
      </div>
    </CardStyles>
  );
}
