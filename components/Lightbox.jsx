import {useEffect} from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
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
    font-size: 1.4rem;
    font-weight: 500;
    font-family: var(--st--fonts-body);
  }

  p {
    margin: 0;
    line-height: 1.6;
    font-size: 1.05rem;
    color: #cfcfcf;
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
    .nav {
      display: none;
    }
  }
`;

export default function Lightbox({work, onClose, onPrev, onNext}) {
  useEffect(() => {
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
  }, [onClose, onPrev, onNext]);

  if (!work) return null;

  const number = String(work.id).padStart(2, '0');

  return (
    <Overlay onClick={onClose} role="dialog" aria-modal="true" aria-label={work.name}>
      <Panel onClick={(event) => event.stopPropagation()}>
        <button className="close" type="button" onClick={onClose}>
          Close
        </button>
        <button className="nav prev" type="button" onClick={onPrev} aria-label="Previous">
          Prev
        </button>
        <button className="nav next" type="button" onClick={onNext} aria-label="Next">
          Next
        </button>
        <img src={work.image} alt={work.name} />
        <div className="copy">
          <p className="number">{number}</p>
          <h2>{work.name}</h2>
          {work.description ? <p>{work.description}</p> : null}
        </div>
      </Panel>
    </Overlay>
  );
}
