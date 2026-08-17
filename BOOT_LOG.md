# Tech Prophecies — local boot log

Date: 2026-08-16
Repo: `/Users/moisessanabria/Documents/website/techprophecies` (clone of [techprophecies/techprophecies](https://github.com/techprophecies/techprophecies), last commit `5692188` / PR #11 `nft-card`, Feb 2022)
Dev server: `http://localhost:3000` (Next 11, still running)

## What actually installed

| Piece | Version |
|---|---|
| Node | **16.20.2** (official darwin-arm64 binary at `~/.local/node-v16.20.2-darwin-arm64`; Homebrew has no `node@16`) |
| npm | 8.19.4 |
| next | 11.1.2 |
| react / react-dom | 17.0.2 |
| web3 | 1.6.1 |
| styled-components | 5.2.1 |
| nprogress | 0.2.0 |

- `.nvmrc` pinned to `16`
- `npm install --force` succeeded: **2194 packages**, `node_modules` ~815MB
- Flood of deprecation warnings (uuid@3, axios@0.20, IPFS/ipld, truffle/ganache, graphql-tools). No fatal native-build failure.

Run again:

```bash
export PATH="$HOME/.local/node-v16.20.2-darwin-arm64/bin:$PATH"
cd /Users/moisessanabria/Documents/website/techprophecies
npm run dev
```

## Routes

| Route | HTTP | Renders | Visual |
|---|---|---|---|
| `/` | 200 | Yes | Full-screen eye/triangle logo, Connect Wallet, nav, then a broken 8-card grid |
| `/about` | 200 | Yes (copy is in the DOM) | Same full-screen logo overlay; About text is buried / unstyled |
| `/mint` | 200 | Yes (Mint button in DOM) | Same overlay; mint form is `display: none` below 52em |

Local artwork JPEG: `GET /assets/images/artworks/1_cyber_woman.jpg` → **200** (158KB). **76 JPGs** on disk.

## What works

- App boots on Node 16 without OpenSSL / node-gyp collapse
- Homepage chrome: logo, Connect Wallet, Metaverse / About / Mint links, footer
- `/about` and `/mint` compile and return 200
- Local prophecy images in `public/assets/images/artworks/` still serve

## What is dead or unused

**Web3 (left alone this round)**

- Truffle network is **Rinkeby** (`truffle-config.js`) — network is gone
- `components/Wallet.jsx` falls back to a **hardcoded Infura Rinkeby key** if MetaMask is missing
- Contracts in `config.js`: `nftaddress` `0xc49619673d1C60B74Ea1E9F60fce0Ee0f2A96d66`, `nftmarketaddress` `0x605b418F8515ecF07Dde97F593Ef367Ded755C97`
- No disconnect button (issue #10)

**Remote media**

- Card avatars: `res.cloudinary.com/react-graphql-store/.../abraham_uuknth.png` → **401**
- Card/feature videos on the same Cloudinary cloud → **401**
- Sample IPFS gateway URL from `nfts.js` → failed / timed out

**Gallery wiring**

- `artworks.js` (76 local paths) is imported in `Grid.jsx` but **not rendered**
- Grid maps `constants/metadata` and mounts `<Card />` with **no props**, so all 8 cards are the same hardcoded Jules Wyvern / #98 block
- Hover-video player is commented out (issue #6)
- Nav “About” in `Menu.jsx` points at `/`, not `/about`. “Metaverse” also points at `/`

**2022 GitHub issues that still apply**

- #3 NProgress — still broken; Fast Refresh warning on anonymous `TopProgressBar`
- #5 first-load flash — still likely (styled-components + no next.config)
- #7 mobile home layout — mint hidden under 52em; menu `display: none` under 52em
- #8 mint button CSS
- #9 About page layout/CSS
- #10 wallet disconnect

## Recommended next move (from this evidence)

Highest leverage: **gallery restage on local files**, not a stack rewrite and not web3.

1. Point the grid at `artworks.js` (the 76 JPGs already work)
2. Pass real data into `Card` so items are unique
3. Hide or stub wallet/mint; drop Rinkeby/Infura from the client
4. Fix About so the 2022 copy is readable, then decide whether to keep NFT voice or rewrite as a 2021 artwork document
5. Only then: light Next upgrade (12/13) if Node 16 is too painful to keep

Do **not** restore minting until someone confirms those contract addresses are still live on a real network.

## Open questions

- Keep the 2022 NFT voice, or rewrite About as a 2021 artwork document?
- Public deploy (Vercel on this repo) vs local-only archive?
- Include `meta-prophecies-tech` in a later round?
