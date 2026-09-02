import styled from 'styled-components';

const YOUTUBE_ID = '3Wc1bN54R_I';
const TITLE =
  'Tech Prophecies: Neural Chapel | Fabiola Larios & Moises Sanabria | 2026';

const FilmStyles = styled.section`
  position: relative;
  z-index: 5;
  max-width: 920px;
  margin: 0 auto;
  padding: 8px 16px 40px;

  @media (min-width: 52em) {
    padding: 8px 24px 64px;
  }

  ${(p) =>
    p.$compact
      ? `
    max-width: none;
    margin: 0 0 2em;
    padding: 0;
  `
      : ''}

  .label {
    margin: 0 0 12px;
    color: #8bacda;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #0c0c0c;
    outline: 1px solid rgba(0, 255, 247, 0.22);
    overflow: hidden;
  }

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .watch {
    display: inline-block;
    margin-top: 12px;
    color: #00fff7;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .watch:hover,
  .watch:focus-visible {
    text-decoration: underline;
    outline: none;
  }
`;

export default function Film({compact = false}) {
  return (
    <FilmStyles id="film" $compact={compact}>
      <p className="label">Neural Chapel · 2026</p>
      <div className="frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`}
          title={TITLE}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <a
        className="watch"
        href={`https://youtu.be/${YOUTUBE_ID}`}
        target="_blank"
        rel="noreferrer"
      >
        Watch on YouTube
      </a>
    </FilmStyles>
  );
}
