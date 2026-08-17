import Link from 'next/link';
import styled from 'styled-components';

const AboutStyles = styled.div`
  position: relative;
  z-index: 5;
  color: #c5c5c5;
  font-family: 'TechProphecy-Regular', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 200;
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 24px 120px;
  h1 {
    font-family: 'TechProphecy', serif;
    color: #fff;
    font-weight: 200;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 2.4rem;
    margin: 0 0 8px;
  }
  .meta {
    color: #8bacda;
    font-size: 0.95rem;
    margin: 0 0 32px;
  }
  h2 {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin: 32px 0 12px;
  }
  p {
    margin: 0 0 1em;
  }
  ul {
    margin: 0 0 1.5em;
    padding-left: 1.2em;
  }
  a {
    color: #00fff7;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function About() {
  return (
    <AboutStyles id="about">
      <h1>Tech Prophecies</h1>
      <p className="meta">
        Moises Sanabria and Fabiola Larios · 2021–22 · generative image cycle
        and A-Frame environment
      </p>

      <h2>What this is</h2>
      <p>
        Tech Prophecies is a cycle of neural images and a navigable 3D space.
        Each still is generated from machine-vision noise and paired with a
        short techno-scriptural verse. Together they stage belief, labor, and
        desire inside networked systems — not as a collection to purchase, but
        as an artwork to enter.
      </p>

      <h2>Medium</h2>
      <ul>
        <li>Generative stills (neural imagery)</li>
        <li>Web environment (A-Frame)</li>
        <li>GLTF sculpture (digital bible / ether)</li>
      </ul>

      <h2>Who</h2>
      <p>
        Moises Sanabria and Fabiola Larios. The space was first assembled in
        2021–22 as a public web environment around the image cycle.
      </p>

      <h2>Next</h2>
      <p>
        <Link href="/metaverse">
          <a>Enter the space</a>
        </Link>
        {' · '}
        <Link href="/#grid-header">
          <a>View the grid</a>
        </Link>
      </p>
    </AboutStyles>
  );
}
