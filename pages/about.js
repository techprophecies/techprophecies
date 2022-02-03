import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
  color: white;
  font-family: 'TechProphecy-Regular';
  font-size: 3vh;
  color: #c5c5c5;
  font-weight: 200;
  max-width: 700px;
`;

export default function About() {
  return (
    <AboutStyles id="about">
      <h3>
        All techprophecies have been claimed.
        <li>OpenSea</li>
        <li>Zora</li>
      </h3>
      <h3>
        81 Unique collectible AI Prophecies with proof of ownership stored on
        the Ethereum blockchain. Tech Prophecies are "Non-Fungible Toekns" on
        Ethreum, and each Tech Prophecy was created as an ERC-721 standard
        token, that powers most digital art and collectibles.
      </h3>
      <ul>
        <li>
          <span>Items</span>
          <span>81</span>
        </li>
        <li>
          <span>Owners</span>
          <span>45</span>
        </li>
        <li>
          <span>Floor</span>
          <span>0.1 ETH</span>
        </li>
        <li>
          <span>Volume Traded</span>
          <span>47,212 ETH</span>
        </li>
      </ul>

      <article>
        <h2>The Project</h2>
        <h3>
          Tech Prophecies launched on Feb 14th, 2022. Each Prophecy is unique
          and no two are exactly alike. The combination of a Tech Prophecy
          aesthetics was randomly genereated from neural noise.
        </h3>
        <h3>
          There are Tech Prophecies created by different machine learning models
          and have different attributes influencing the rarity.
        </h3>
        <h3>
          Tech Prophecies is a community-driven movement aspiring to
          revolutionize the conversation around human machine belief and
          technological singularity in the crypto space. Roadmap may be subject
          to change.
        </h3>
      </article>

      <article>
        <h2>Technical Specifications</h2>
        <p>
          - Every Tech Prophecy is an ERC-721 token representing verse in the
          religious techno singularity scripture. Images are programmatically
          generated with a variety of subjects, audio genre, authors, and more.
          Metadata and images are distributed on IPFS.
        </p>

        <h2>Buying a Tech Prophecy </h2>
        <p>
          200 infamous Tech Prophecies will be withheld for giveaways and early
          worshippers.
        </p>
      </article>

      <article>
        <h2>RoadMap</h2>
        <p>Tech Prophecies assets, database and promotional site built</p>
        <p>A.I. Generation system developed</p>
        <p>1/15 Launchpad Tech Prophecy pre-orders (SOLT OUT!)</p>
        <p>1/30 Start daily Twitter and Discord giveaways</p>
        <p>2/1 Tech Prophecy summoning has begun</p>
        <p>2/15 Launch merchandise store</p>
        <p>Discord bot for tracking summons, sales, new listings.</p>
        <p>PFP Generator (in progress)</p>
        <p>Rare Tech Prophecy set auctioned for charity</p>
      </article>

      <article>
        <h2>What’s next after launch</h2>
        <p>
          With Tech prophecies are designed with games and contract-extensions
          in mind. Each comes with extra metadata embedded to make sure their
          power scale be leveraged as development continues. This is where the
          worshippers (NFT owners) come in.
        </p>
        <p>
          Worshiper guidance: Snapshot voting for NFT holders will define how
          the project moves forward
        </p>
        <p>
          Game mechanics: Battling, tithing, augmenting, spawning, petting… you
          could do so much with a Tech Prophecy.
        </p>
        <p>
          Contributing: Join us in releasing open source tools to help
          blockchain and NFT development for gaming.
        </p>
      </article>

      <article>
        <h2>Become a worshipper</h2>
        <p>
          Obtaining a Tech Prophecy is a long-term prospect that one should not
          take lightly.
        </p>

        <p>
          Unique: Obtain one of 1,141 unique tech prophecy with provable,
          randomized rarity
        </p>

        <p>
          Forever bonded: Total commercial usage rights granted to NFT owners.
        </p>

        <p>
          Community access: Help shape future plans as the Clery and the
          treasure grow.
        </p>

        <p>
          Future developments: As more Tech prophecies reveal themselves, so
          will future utility and augmentations.
        </p>
      </article>

      <article>
        <h3>We are the clergy | Creators</h3>
        <div>
          <span>IMAGE</span>
          <span>moisesdsanabria,</span>
        </div>

        <div>
          <span>IMAGE</span>
          <span>fabiolalarios,</span>
        </div>

        <li>Devout individuals building products and culture for Web3.</li>
        <li>
          - This project is meant to grow and evolve with community feedback.
        </li>

        <li>
          We also plan to release open-sources tools and guides to help other
          NFT creators build better, more reliable products. - [Link]
        </li>
        <li>– Find us on Discord or email us.</li>
      </article>
    </AboutStyles>
  );
}
