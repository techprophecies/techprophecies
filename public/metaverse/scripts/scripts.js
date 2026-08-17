function prophecyKeyFromEl(el, key) {
  if (key) return key;
  const src =
    (el.getDOMAttribute && el.getDOMAttribute('src')) ||
    el.getAttribute('src') ||
    '';
  return String(src).replace(/^#/, '');
}

function fillProphecyHud(key) {
  const hud = document.getElementById('prophecy-hud');
  if (!hud) return;
  const data = window.PROPHECIES && window.PROPHECIES[key];
  if (!data) {
    hud.classList.remove('is-on');
    return;
  }

  const number = String(data.n).padStart(2, '0');
  const rarity = data.rarity ? data.rarity + ' · ' : '';
  hud.querySelector('.meta').textContent =
    number + ' · ' + rarity + 'VQGAN+CLIP · 2021';
  hud.querySelector('.title').textContent = data.title || '';
  hud.querySelector('.verse').textContent = data.verse || '';
  hud.classList.add('is-on');
}

function setHudSound(on) {
  const el = document.querySelector('#prophecy-hud .sound');
  if (!el) return;
  el.textContent = on ? 'Sound on' : '';
  el.classList.toggle('is-on', !!on);
}

function clearProphecyHud() {
  const hud = document.getElementById('prophecy-hud');
  if (!hud) return;
  hud.classList.remove('is-on');
  setHudSound(false);
}

function videoUrlForKey(key) {
  const data = window.PROPHECIES && window.PROPHECIES[key];
  if (!data || !window.VIDEOS) return '';
  return window.VIDEOS[data.n] || window.VIDEOS[String(data.n)] || '';
}

function armCloudinaryVideo(video, key, muted) {
  const url = videoUrlForKey(key);
  if (!url || !video) return false;
  const mute = muted !== false;
  video.muted = mute;
  video.defaultMuted = mute;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.preload = 'none';
  if (video.getAttribute('data-src') !== url) {
    video.setAttribute('data-src', url);
    video.src = url;
    if (typeof video.load === 'function') video.load();
  }
  return true;
}

function videoUsable(video) {
  if (!video || typeof video.play !== 'function') return false;
  if (video.error) return false;
  if (video.networkState === 3) return false;
  return video.readyState >= 2;
}

function playVideo(video) {
  if (!video || typeof video.play !== 'function') return;
  const play = video.play();
  if (play && typeof play.catch === 'function') play.catch(function () {});
}

AFRAME.registerComponent('raycaster-img', {
  schema: {
    video: {type: 'selector'},
    visible: {type: 'selector'},
    key: {type: 'string', default: ''},
  },

  init: function () {
    const el = this.el;
    const videoToPlay = this.data.video;
    const videoVisible = this.data.visible;
    const restScale = el.getAttribute('scale') || {x: 1, y: 1, z: 1};
    const key = prophecyKeyFromEl(el, this.data.key);
    let playToken = 0;
    let looking = false;

    function showClip() {
      if (videoVisible) videoVisible.setAttribute('visible', 'true');
      el.setAttribute('visible', 'false');
    }

    function startMutedPreview() {
      const token = ++playToken;
      looking = true;
      el.setAttribute('scale', '1.06 1.06 1.06');
      fillProphecyHud(key);
      setHudSound(false);

      const armed = armCloudinaryVideo(videoToPlay, key, true);
      if (!armed) {
        el.setAttribute('material', 'opacity', 0.92);
        return;
      }

      if (videoUsable(videoToPlay)) {
        playVideo(videoToPlay);
        showClip();
        return;
      }

      const onReady = function () {
        if (token !== playToken || !looking) return;
        videoToPlay.removeEventListener('canplay', onReady);
        playVideo(videoToPlay);
        showClip();
      };
      videoToPlay.addEventListener('canplay', onReady);
      el.setAttribute('material', 'opacity', 0.92);
    }

    this.el.addEventListener('mouseenter', startMutedPreview);

    this.el.addEventListener('click', () => {
      looking = true;
      el.setAttribute('scale', '1.06 1.06 1.06');
      fillProphecyHud(key);

      const armed = armCloudinaryVideo(videoToPlay, key, false);
      if (!armed || !videoToPlay) return;

      videoToPlay.muted = false;
      videoToPlay.defaultMuted = false;
      playVideo(videoToPlay);
      showClip();
      setHudSound(true);
    });

    this.el.addEventListener('mouseleave', () => {
      playToken += 1;
      looking = false;
      el.setAttribute(
        'scale',
        restScale.x + ' ' + restScale.y + ' ' + restScale.z,
      );
      el.setAttribute('material', 'opacity', 1);
      el.setAttribute('visible', 'true');
      clearProphecyHud();

      if (videoToPlay && typeof videoToPlay.pause === 'function') {
        videoToPlay.muted = true;
        videoToPlay.defaultMuted = true;
        videoToPlay.pause();
        try {
          videoToPlay.currentTime = 0;
        } catch (error) {}
      }
      if (videoVisible) videoVisible.setAttribute('visible', 'false');
    });
  },
});

AFRAME.registerComponent('raycaster-biblia', {
  init: function () {
    document.querySelector('a-scene').addEventListener('loaded', () => {
      const ambientLight = document.getElementById('ambientLight');
      const spotLight = document.getElementById('spotLight');

      this.el.addEventListener('mouseenter', () => {
        if (ambientLight) ambientLight.setAttribute('visible', 'false');
        if (spotLight) spotLight.setAttribute('visible', 'true');
      });

      this.el.addEventListener('mouseleave', () => {
        if (ambientLight) ambientLight.setAttribute('visible', 'true');
        if (spotLight) spotLight.setAttribute('visible', 'false');
      });
    });
  },
});
