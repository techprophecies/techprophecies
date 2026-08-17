import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';

import MarkLoader from './MarkLoader';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 4000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: max(16px, env(safe-area-inset-bottom));

  @media (min-width: 64em) {
    padding: 24px;
  }
`;

const Panel = styled.div`
  position: relative;
  width: min(920px, 100%);
  max-height: 100%;
  overflow: auto;
  color: #e8e8e8;
  display: grid;
  gap: 16px;
  padding-top: 48px;

  @media (min-width: 64em) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
    gap: 24px 32px;
    padding-top: 48px;
    width: min(1080px, 100%);
  }

  @media (min-width: 96em) {
    width: min(1200px, 100%);
  }

  .media {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
  }

  .frame {
    position: relative;
    background: #111;
  }

  img,
  video {
    width: 100%;
    height: auto;
    display: block;
    background: #111;
  }

  .unmute {
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 3;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(0, 255, 247, 0.45);
    color: #00fff7;
    cursor: pointer;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 8px 10px;
  }

  .unmute:hover,
  .unmute:focus-visible {
    outline: none;
    box-shadow: 0 0 12px rgba(0, 255, 247, 0.4);
  }

  .media-wait {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.28);
  }

  .media-bar {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .copy {
    font-family: 'TechProphecy-Regular', Georgia, serif;
    min-width: 0;
  }

  .number {
    color: #8a8a8a;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin: 0 0 8px;
  }

  h2 {
    margin: 0 0 16px;
    color: #fff;
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-weight: 200;
    font-family: 'TechProphecy', serif;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #fff, 1px 1px 8px #ccc;
    line-height: 1.1;
  }

  p {
    margin: 0;
    line-height: 1.55;
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: #cfcfcf;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0 0;
  }

  .tags span {
    color: #00fff7;
    border: 1px solid rgba(0, 255, 247, 0.35);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 8px;
  }

  .close,
  .nav {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.35);
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 8px 12px;
    min-height: 40px;
  }

  .close:hover,
  .nav:hover,
  .close:focus-visible,
  .nav:focus-visible {
    color: #00fff7;
    border-color: #00fff7;
    outline: none;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
`;

export default function Lightbox({work, onClose, onPrev, onNext}) {
  const videoRef = useRef(null);
  const [needsUnmute, setNeedsUnmute] = useState(false);
  const [videoReady, setVideoReady] = useState(!work || !work.video);

  useEffect(() => {
    if (!work) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [work, onClose, onPrev, onNext]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !work || !work.video) {
      setNeedsUnmute(false);
      setVideoReady(true);
      return undefined;
    }

    setVideoReady(false);
    const onReady = () => setVideoReady(true);
    video.addEventListener('canplay', onReady);
    video.addEventListener('loadeddata', onReady);

    video.muted = false;
    const play = video.play();
    if (play && typeof play.catch === 'function') {
      play.catch(() => {
        video.muted = true;
        setNeedsUnmute(true);
        const mutedPlay = video.play();
        if (mutedPlay && typeof mutedPlay.catch === 'function') {
          mutedPlay.catch(() => {});
        }
      });
    }

    return () => {
      video.removeEventListener('canplay', onReady);
      video.removeEventListener('loadeddata', onReady);
      video.pause();
    };
  }, [work]);

  if (typeof document === 'undefined' || !work) return null;

  const number = String(work.id).padStart(2, '0');

  const unmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    const play = video.play();
    if (play && typeof play.catch === 'function') play.catch(() => {});
    setNeedsUnmute(false);
  };

  return createPortal(
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={work.name}
    >
      <Panel onClick={(event) => event.stopPropagation()}>
        <button className="close" type="button" onClick={onClose}>
          Close
        </button>
        <div className="media">
          <div className="frame">
            {work.video ? (
              <video
                ref={videoRef}
                src={work.video}
                poster={work.image}
                controls
                playsInline
                loop
                preload="none"
              />
            ) : (
              <img src={work.image} alt={work.name} />
            )}
            {needsUnmute ? (
              <button className="unmute" type="button" onClick={unmute}>
                Unmute
              </button>
            ) : null}
            {work.video && !videoReady ? (
              <div className="media-wait">
                <MarkLoader size="sm" pulse />
              </div>
            ) : null}
          </div>
          <div className="media-bar">
            <button
              className="nav prev"
              type="button"
              onClick={onPrev}
              aria-label="Previous"
            >
              Prev
            </button>
            <button
              className="nav next"
              type="button"
              onClick={onNext}
              aria-label="Next"
            >
              Next
            </button>
          </div>
        </div>
        <div className="copy">
          <p className="number">
            {number} · VQGAN+CLIP · 2021
            {work.rarity ? ` · ${work.rarity}` : ''}
          </p>
          <h2>{work.name}</h2>
          {work.description ? <p>{work.description}</p> : null}
          {work.rarity || work.subject || work.type || work.element || work.entropy ? (
            <div className="tags">
              {work.rarity ? <span>{work.rarity}</span> : null}
              {work.type ? <span>{work.type}</span> : null}
              {work.element ? <span>{work.element}</span> : null}
              {work.entropy ? <span>{work.entropy}</span> : null}
              {work.subject ? <span>{work.subject}</span> : null}
            </div>
          ) : null}
        </div>
      </Panel>
    </Overlay>,
    document.body,
  );
}
