import React from 'react';
import styled from 'styled-components';

const LoadingGlowStyles = styled.div`
  @keyframes scene-anim {
    0% {
      box-shadow: inset 0 0 0 3px white;
      opacity: 0;
      /* box-shadow: out/inset x-ofset y-ofset blur size color */
    }
    20% {
      box-shadow: inset 0 0 0 8px white;
    }
    40% {
      box-shadow: inset 0 0 0 2px white;
    }
    60% {
      box-shadow: inset 0 0 0 6px white;
    }
    80% {
      box-shadow: inset 0 0 0 3px white;
    }
    100% {
      box-shadow: inset 0 0 0 5px white;
    }
  }

  /* Sets the SASS variables relating to anything with the halo class */
  .halo {
    position: relative;
    --c-1: white;
    --c-2: white;
    --c-3: white;
    --c-4: white;
    --s-core: 5px;
    --s-1: 4px;
    --s-2: 3x;
    --s-3: 2x;
    --s-4: 1px;
  }

  /* Setting the css for everything with the halo or i class */
  .halo i {
    --c: var(--c-1);
    --s: var(--s-1);

    animation: 4s halo-anim 1.2s ease-in-out infinite;
    background-color: var(--c);
    box-shadow: 0 0 0 var(--s) var(--c);
    border-radius: 50%;
    display: block;
    left: calc(50% - (var(--s-core) / 2));
    height: var(--s-core);
    position: absolute;
    top: 50%;
    transform-origin: center center;
    width: var(--s-core);
  }

  /* Keyframes for amything with the halo class. Causes the slight breathing effect */
  @keyframes halo-anim {
    50% {
      transform: scale(1.05);
      opacity: 0;
    }
  }

  /* Setting the colors and delay offset of the other helo circles*/
  .halo i:nth-of-type(2) {
    animation-delay: 0.9s;
    --c: var(--c-2);
    --s: var(--s-2);
  }
  .halo i:nth-of-type(3) {
    animation-delay: 0.6s;
    --c: var(--c-3);
    --s: var(--s-3);
  }
  .halo i:nth-of-type(4) {
    animation-delay: 0.3s;
    --c: var(--c-4);
    --s: var(--s-4);
  }
`;

export default function LoadingGlow() {
  return (
    <LoadingGlowStyles id="loading">
      <div className="halo">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </LoadingGlowStyles>
  );
}
