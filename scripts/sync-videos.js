const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'videos.js'), 'utf8');
const match = source.match(/export const videos = ({[\s\S]*});/);

if (!match) {
  throw new Error('Could not parse videos.js');
}

const videos = Function('"use strict"; return (' + match[1] + ')')();
const filled = {};

Object.keys(videos).forEach((key) => {
  const url = videos[key];
  if (url) filled[key] = url;
});

const out =
  '/* Generated from videos.js. Run npm run sync-videos after pasting URLs. */\n' +
  'window.VIDEOS = ' +
  JSON.stringify(filled, null, 2) +
  ';\n';

fs.writeFileSync(path.join(root, 'public/metaverse/scripts/videos.js'), out);
console.log(
  'Wrote public/metaverse/scripts/videos.js with',
  Object.keys(filled).length,
  'URLs',
);
