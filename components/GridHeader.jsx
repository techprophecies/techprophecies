import styled from 'styled-components';

const GridHeaderStyles = styled.div`
  box-sizing: border-box;
  margin: 0 0 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  .grid-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 64px;
    padding-bottom: 16px;
  }
  @media (min-width: 52em) {
    .grid-header-wrapper {
      padding-top: 88px;
    }
  }
  h2 {
    margin: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  .count {
    color: #8a8a8a;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export default function GridHeader({count}) {
  return (
    <GridHeaderStyles id="grid-header">
      <div className="grid-header-wrapper">
        <h2>Prophecies</h2>
        {count != null ? <span className="count">{count}</span> : null}
      </div>
    </GridHeaderStyles>
  );
}
