import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';

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
  gap: 24px;

  @media (min-width: 64em) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    background: #111;
  }

  .copy {
    font-family: 'TechProphecy-Regular', Georgia, serif;
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
    position: absolute;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.35);
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 8px 12px;
    z-index: 2;
  }

  .close:hover,
  .nav:hover {
    color: #00fff7;
    border-color: #00fff7;
  }

  .close {
    top: 0;
    right: 0;
  }

  .nav.prev {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .nav.next {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 63.99em) {
    padding-top: 48px;
    .nav {
      top: auto;
      bottom: 8px;
      transform: none;
      display: inline-flex;
    }
    .nav.prev {
      left: 8px;
    }
    .nav.next {
      right: 8px;
    }
  }
`;

export default function Lightbox({work, onClose, onPrev, onNext}) {
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

  if (typeof document === 'undefined' || !work) return null;

  const number = String(work.id).padStart(2, '0');

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
        <img src={work.image} alt={work.name} />
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
