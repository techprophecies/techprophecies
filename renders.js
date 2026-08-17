// Later-model stills visitors can view (not generate). Same chapel prompt.
// Empty string means that era is not pasted yet. Original 2021 JPEG stays canonical.
import {videos} from './videos';

export const ERAS = [
  {id: 'vqgan-clip', year: 2021, label: 'VQGAN+CLIP'},
  {id: 'sd15', year: 2022, label: 'Stable Diffusion 1.5'},
  {id: 'sdxl', year: 2023, label: 'SDXL'},
  {id: 'flux1', year: 2024, label: 'FLUX.1'},
  {id: 'flux2', year: 2026, label: 'FLUX.2'},
];

function emptyLater() {
  return {
    sd15: '',
    sdxl: '',
    flux1: '',
    flux2: '',
  };
}

export const renders = Object.keys(videos).reduce((map, key) => {
  map[key] = emptyLater();
  return map;
}, {});
