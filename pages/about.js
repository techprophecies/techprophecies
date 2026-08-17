import Link from 'next/link';
import styled from 'styled-components';

const AboutStyles = styled.div`
  position: relative;
  z-index: 5;
  color: #c5c5c5;
  font-family: 'TechProphecy-Regular', Georgia, serif;
  font-size: clamp(1rem, 2.1vw, 1.2rem);
  font-weight: 200;
  line-height: 1.55;
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 16px 96px;
  padding-bottom: max(96px, env(safe-area-inset-bottom));

  @media (min-width: 52em) {
    padding: 72px 24px 120px;
  }

  h1 {
    font-family: 'TechProphecy', serif;
    color: #fff;
    font-weight: 200;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    margin: 0 0 8px;
    text-shadow: 1px 1px 8px #fff, 1px 1px 8px #ccc;
  }

  .meta {
    color: #8bacda;
    font-size: 0.95rem;
    margin: 0 0 32px;
  }

  h2,
  h3.label {
    color: #fff;
    font-family: 'TechProphecy', serif;
    font-size: 1.15rem;
    font-weight: 200;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 36px 0 12px;
  }

  p {
    margin: 0 0 1em;
  }

  ul {
    margin: 0 0 1.5em;
    padding-left: 1.2em;
  }

  .rarity li {
    margin-bottom: 0.35em;
  }

  .creators {
    display: grid;
    gap: 8px;
    margin: 0 0 1.5em;
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
        Moises Sanabria and Fabiola Larios · launched Feb 14th, 2022
      </p>

      <h2>The Project</h2>
      <p>
        Each Prophecy is unique and no two are exactly alike. The combination of
        a Tech Prophecy aesthetics was randomly generated from neural noise.
      </p>
      <h3 className="label">Medium</h3>
      <p>
        The stills were generated in 2021 with VQGAN+CLIP, a CLIP-guided GAN,
        earlier than Stable Diffusion.
      </p>
      <p>
        There are Tech Prophecies created by different machine learning models
        and have different attributes influencing the rarity.
      </p>
      <p>
        Tech Prophecies is a community-driven movement aspiring to
        revolutionize the conversation around human machine belief and
        technological singularity.
      </p>

      <h2>Rarity</h2>
      <ul className="rarity">
        <li>Common — 48 designed (8:1)</li>
        <li>Rare — 20 (1:1)</li>
        <li>Super Rare — 14 (1:5)</li>
        <li>Ultra Rare — 10 (1:12)</li>
        <li>Secret Rare — 1 (1:48)</li>
      </ul>
      <p>
        Prompts, subjects, types, elements, and entropy tags sit under each
        still. Cyborg, human, machine, plant. Biological, divine, ghost.
        Singularity, surveillance, capitalism, climate. The verse is the other
        half of the image.
      </p>

      <h2>Technical Specifications</h2>
      <p>
        Every Tech Prophecy is a verse in the religious techno singularity
        scripture. Images are programmatically generated with a variety of
        subjects, authors, and more. The stills live here as a public cycle.
        The space is an A-Frame environment with a GLTF bible.
      </p>

      <h2>We are the clergy | Creators</h2>
      <div className="creators">
        <span>moisesdsanabria</span>
        <span>fabiolalarios</span>
      </div>
      <p>Devout individuals building products and culture.</p>
      <p>
        This project is meant to grow and evolve. Find the grid, or enter the
        space.
      </p>
      <p>
        <Link href="/#grid-header">
          <a>View the grid</a>
        </Link>
        {' · '}
        <Link href="/metaverse">
          <a>Enter the space</a>
        </Link>
      </p>
    </AboutStyles>
  );
}
