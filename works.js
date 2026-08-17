import {artworks} from './artworks';
import {nftarray} from './nfts';

function titleFromPath(path) {
  const file = path.split('/').pop().replace(/\.[^.]+$/, '');
  return file.replace(/^\d+_/, '').replace(/[_-]+/g, ' ').trim();
}

const verses = nftarray.properties || [];

export const works = artworks.map((image, index) => {
  const verse = verses[index] || {};
  return {
    id: index + 1,
    image,
    name: verse.name || titleFromPath(image),
    description: verse.description || '',
  };
});
