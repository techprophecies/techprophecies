import styled from 'styled-components';

const CardStyles = styled.div`
  margin: 0;
  max-width: 300px;
  min-width: 0;
  border-radius: 0px;
  flex: 1 1 auto;
  background-color: var(--theme-ui-colors-white-100, #ffffff);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  text-decoration: none;
  color: inherit;
  position: relative;
  will-change: transform;
  :hover {
    transform: translateY(-4px);
    box-shadow: 0px 10px 20px rgb(0 0 0 / 10%);
  }
  @media screen and (min-width: 40em) {
    border-radius: 10px;
  }
  .flex-body-container {
    list-style-type: none;
    padding: 1.5rem;
    border-radius: 15px;
    color: white;
    background-color: #14253d;
    box-shadow: 8px 10px 0 10px #0c1627;
  }
  .flex-body-container h1 {
    display: inline;
    font-size: 1.1rem;
    margin: 0;
  }
  .flex-body-container img.prophecy {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    display: block;
    background: #0c1627;
  }
  .paragraph {
    margin-top: 1rem;
    margin-bottom: 0;
    color: #8bacda;
    font-size: 16px;
    line-height: 1.4;
  }
`;

export default function Card({image, name, description, id}) {
  return (
    <CardStyles>
      <div className="flex-body-container">
        <img className="prophecy" src={image} alt={name} />
        <h1>{name}</h1>
        {description ? (
          <div className="paragraph">
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </CardStyles>
  );
}
