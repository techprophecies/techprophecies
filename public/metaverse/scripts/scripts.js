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

function clearProphecyHud() {
  const hud = document.getElementById('prophecy-hud');
  if (!hud) return;
  hud.classList.remove('is-on');
}

function videoUrlForKey(key) {
  const data = window.PROPHECIES && window.PROPHECIES[key];
  if (!data || !window.VIDEOS) return '';
  return window.VIDEOS[data.n] || window.VIDEOS[String(data.n)] || '';
}

function armCloudinaryVideo(video, key) {
  const url = videoUrlForKey(key);
  if (!url || !video) return false;
  video.muted = true;
  video.defaultMuted = true;
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

    function showClip() {
      if (videoVisible) videoVisible.setAttribute('visible', 'true');
      el.setAttribute('visible', 'false');
    }

    this.el.addEventListener('mouseenter', () => {
      const token = ++playToken;
      el.setAttribute('scale', '1.06 1.06 1.06');
      fillProphecyHud(key);

      const armed = armCloudinaryVideo(videoToPlay, key);
      if (!armed) {
        el.setAttribute('material', 'opacity', 0.92);
        return;
      }

      if (videoUsable(videoToPlay)) {
        const play = videoToPlay.play();
        if (play && typeof play.catch === 'function') play.catch(function () {});
        showClip();
        return;
      }

      const onReady = function () {
        if (token !== playToken) return;
        videoToPlay.removeEventListener('canplay', onReady);
        const play = videoToPlay.play();
        if (play && typeof play.catch === 'function') play.catch(function () {});
        showClip();
      };
      videoToPlay.addEventListener('canplay', onReady);
      el.setAttribute('material', 'opacity', 0.92);
    });

    this.el.addEventListener('mouseleave', () => {
      playToken += 1;
      el.setAttribute(
        'scale',
        restScale.x + ' ' + restScale.y + ' ' + restScale.z,
      );
      el.setAttribute('material', 'opacity', 1);
      el.setAttribute('visible', 'true');
      clearProphecyHud();

      if (videoToPlay && typeof videoToPlay.pause === 'function') {
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
