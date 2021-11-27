import styled from 'styled-components';

const SearchStyles = styled.div`
  display: none;
  flex: 1 1 0%;
  justify-content: center;
  position: relative;
  @media (min-width: 52em) {
    display: block;
    padding-left: var(--st--space-7);
    padding-right: var(--st--space-7);
  }
  .search-wrapper {
    position: relative;
    z-index: 999;
  }
  .search-icon {
    left: 20px;
    pointer-events: none;
  }
  .search-icon[data-active='true'] {
    color: var(--st--colors-black100);
  }
  input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }
  input:focus-visible {
    outline-offset: 0px;
  }
  :focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
  .search-wrapper input {
    border: none;
    width: 100%;
    padding-left: var(--st--space-8);
    --st---strokeColor: rgba(0, 0, 0, 0.05);
    font-family: var(--st--fonts-body);
    line-height: 1;
    font-size: var(--st--fontSizes-2);
    min-height: 54px;
    display: flex;
    align-items: center;
    appearance: none;
    padding-left: var(--st--space-5);
    padding-right: var(--st--space-5);
    transition-property: box-shadow;
    font-weight: 600;
    border-radius: var(--st--radii-round);
  }
  .search-wrapper input.border-large {
    --st---shadowColor: rgba(0, 0, 0, 0.05);
    --st---strokeColor: rgba(0, 0, 0, 0.05);
    --st---borderColor: var(--st--colors-black100);
    --st---placeholderColor: var(--st--colors-black40);
    --st---placeholderFocusColor: var(--st--colors-black40);
    border: none;
    box-shadow: 0px 0px 0px 1px var(--st---strokeColor),
      0px 10px 20px var(--st---shadowColor);
  }
  .search-wrapper input:focus,
  .search-wrapper input[data-active='true'] {
    box-shadow: inset 0px 0px 0px 3px var(--st---borderColor),
      0px 10px 20px var(--st---shadowColor);
  }
`;

export default function Search() {
  return (
    <SearchStyles>
      <div className="search-wrapper">
        <span className="search-icon" />
        <input
          className="border-large"
          data-active="false"
          placeholder="Search Tech Prophecies..."
          value=""
        />
      </div>
    </SearchStyles>
  );
}
