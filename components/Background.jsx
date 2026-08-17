import styled from 'styled-components';

const BackgroundStyles = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }

  .stars,
  .twinkling,
  .clouds {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    will-change: transform;
    transition: transform 120ms linear;
  }

  .stars {
    background: #000 url('/assets/images/stars.png') repeat top center;
    z-index: 0;
    transform: translate3d(
      calc(var(--px, 0) * -18px),
      calc(var(--py, 0) * -18px),
      0
    );
  }

  .twinkling {
    background: transparent url('/assets/images/twinkling.png') repeat top
      center;
    z-index: 1;
    transform: translate3d(
      calc(var(--px, 0) * -32px),
      calc(var(--py, 0) * -32px),
      0
    );
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    background: transparent url('/assets/images/cloudsblue.png') repeat top
      center;
    z-index: 2;
    opacity: 0.7;
    transform: translate3d(
      calc(var(--px, 0) * -52px),
      calc(var(--py, 0) * -26px),
      0
    );
    animation: move-clouds-back 200s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .stars,
    .twinkling,
    .clouds {
      animation: none;
      transition: none;
      transform: none;
    }
  }
`;

export default function Background() {
  return (
    <BackgroundStyles id="card-background" aria-hidden="true">
      <div className="stars" />
      <div className="twinkling" />
      <div className="clouds" />
    </BackgroundStyles>
  );
}
