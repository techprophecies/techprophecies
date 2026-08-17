import {artworks} from './artworks';
import {nftarray} from './nfts';
import {chapel} from './chapel';
import {videos} from './videos';
import {voices} from './voices';
import {renders} from './renders';

function titleFromPath(path) {
  const file = path.split('/').pop().replace(/\.[^.]+$/, '');
  return file.replace(/^\d+_/, '').replace(/[_-]+/g, ' ').trim();
}

function numberFromPath(path) {
  const file = path.split('/').pop();
  const match = file && file.match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

const verses = nftarray.properties || [];
const chapelByNumber = chapel.reduce((map, entry) => {
  map[entry.n] = entry;
  return map;
}, {});

export const works = artworks.map((image, index) => {
  const verse = verses[index] || {};
  const n = numberFromPath(image) || index + 1;
  const meta = chapelByNumber[n] || {};
  return {
    id: n,
    image,
    name: verse.name || titleFromPath(image),
    description: verse.description || meta.prophecy || '',
    rarity: meta.rarity || '',
    subject: meta.subject || '',
    type: meta.type || '',
    element: meta.element || '',
    entropy: meta.entropy || '',
    prompt: meta.prompt || '',
    video: videos[n] || '',
    voice: voices[n] || '',
    renders: renders[n] || {},
  };
});
