import {useCallback} from 'react';
import styled from 'styled-components';

import {works} from '../works';
import GridHeader from './GridHeader';
import Card from './Card';
import Lightbox from './Lightbox';

const GridStyles = styled.section`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1760px;
  padding: 0 16px;
  position: relative;
  z-index: 4;
  @media (min-width: 52em) {
    padding: 0 24px;
  }
  .grid-wrapper {
    position: relative;
    width: 100%;
    min-width: 0;
    max-width: 1760px;
    margin: 0 auto;
    padding: 0 0 max(72px, env(safe-area-inset-bottom));
    box-sizing: border-box;
    z-index: 4;
  }
  .grid-wrapper-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px 16px;
  }
  @media (min-width: 40em) {
    .grid-wrapper-inner {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 64em) {
    .grid-wrapper-inner {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px 28px;
    }
  }
  @media (min-width: 80em) {
    .grid-wrapper-inner {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 96em) {
    .grid-wrapper-inner {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export default function Grid({activeIndex, onOpen, onClose, onPrev, onNext}) {
  const open = useCallback(
    (index) => {
      if (onOpen) onOpen(index);
    },
    [onOpen],
  );

  const active = activeIndex == null ? null : works[activeIndex];

  return (
    <GridStyles>
      <GridHeader count={works.length} />
      <div className="grid-wrapper">
        <div className="grid-wrapper-inner">
          {works.map((work, index) => (
            <Card
              key={work.id}
              id={work.id}
              image={work.image}
              name={work.name}
              description={work.description}
              rarity={work.rarity}
              lazy={index > 7}
              onOpen={() => open(index)}
            />
          ))}
        </div>
      </div>
      {active ? (
        <Lightbox work={active} onClose={onClose} onPrev={onPrev} onNext={onNext} />
      ) : null}
    </GridStyles>
  );
}
