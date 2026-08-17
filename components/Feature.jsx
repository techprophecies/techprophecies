import styled from 'styled-components';

import {works} from '../works';

const FeatureStyles = styled.section`
  position: relative;
  z-index: 5;
  max-width: 1600px;
  margin: 0 auto;
  padding: 72px 24px 0;
  .feature-wrapper {
    display: grid;
    gap: 24px;
    align-items: center;
  }
  @media (min-width: 52em) {
    .feature-wrapper {
      grid-template-columns: 1.1fr 0.9fr;
      gap: 48px;
    }
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 1;
    object-fit: cover;
    background: #0c0c0c;
  }
  .label {
    color: #8a8a8a;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin: 0 0 12px;
  }
  h2 {
    margin: 0 0 16px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.02em;
  }
  p {
    margin: 0;
    color: #c5c5c5;
    font-family: 'TechProphecy-Regular', Georgia, serif;
    font-size: 1.05rem;
    line-height: 1.55;
    max-width: 36em;
  }
`;

export default function Feature() {
  const featured = works[0];

  return (
    <FeatureStyles>
      <div className="feature-wrapper">
        <img src={featured.image} alt={featured.name} />
        <div>
          <p className="label">Selected work</p>
          <h2>{featured.name}</h2>
          {featured.description ? <p>{featured.description}</p> : null}
        </div>
      </div>
    </FeatureStyles>
  );
}
