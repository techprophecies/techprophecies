import styled from 'styled-components';

const CardStyles = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
  appearance: none;
  position: relative;
  will-change: transform;
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    outline: none;
  }

  .frame {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
    background: #0c0c0c;
    outline: 1px solid transparent;
    transition: outline-color 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .frame,
  &:focus-visible .frame {
    outline-color: rgba(0, 255, 247, 0.55);
  }

  .prophecy {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1);
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .prophecy,
  &:focus-visible .prophecy {
    transform: scale(1.06);
  }

  .verse {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 48px 16px 16px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.88));
    color: #e8e8e8;
    font-family: 'TechProphecy-Regular', Georgia, serif;
    font-size: 13px;
    line-height: 1.45;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 280ms ease, transform 280ms ease;
    pointer-events: none;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover .verse,
  &:focus-visible .verse {
    opacity: 1;
    transform: translateY(0);
  }

  .meta {
    padding: 12px 0 4px;
  }

  .number {
    display: block;
    color: #8a8a8a;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .name {
    margin: 0;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
    &:hover .prophecy {
      transform: none;
    }
    &:hover .verse {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover,
    &:focus-visible {
      transform: none;
    }
    .prophecy,
    .verse {
      transition: none;
    }
    &:hover .prophecy,
    &:focus-visible .prophecy {
      transform: none;
    }
    &:hover .verse,
    &:focus-visible .verse {
      opacity: 1;
      transform: none;
    }
  }
`;

export default function Card({
  image,
  name,
  description,
  id,
  lazy = true,
  onOpen,
}) {
  const number = String(id).padStart(2, '0');

  return (
    <CardStyles
      type="button"
      onClick={() => onOpen && onOpen()}
      aria-label={`${name}. Open prophecy ${number}`}
    >
      <div className="frame">
        <img
          className="prophecy"
          src={image}
          alt=""
          loading={lazy ? 'lazy' : 'eager'}
        />
        {description ? <p className="verse">{description}</p> : null}
      </div>
      <div className="meta">
        <span className="number">{number}</span>
        <h2 className="name">{name}</h2>
      </div>
    </CardStyles>
  );
}
