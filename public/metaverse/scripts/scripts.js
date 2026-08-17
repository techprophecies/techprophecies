AFRAME.registerComponent('raycaster-img', {
  schema: {
    video: {type: 'selector'},
    visible: {type: 'selector'},
  },

  init: function () {
    const el = this.el;
    const videoToPlay = this.data.video;
    const videoVisible = this.data.visible;
    const restScale = el.getAttribute('scale') || {x: 1, y: 1, z: 1};

    function videoUsable(video) {
      if (!video || typeof video.play !== 'function') return false;
      if (video.error) return false;
      if (video.networkState === 3) return false;
      return video.readyState >= 2;
    }

    this.el.addEventListener('mouseenter', () => {
      el.setAttribute('scale', '1.06 1.06 1.06');

      if (videoUsable(videoToPlay)) {
        const play = videoToPlay.play();
        if (play && typeof play.catch === 'function') play.catch(function () {});
        if (videoVisible) videoVisible.setAttribute('visible', 'true');
        el.setAttribute('visible', 'false');
        return;
      }

      el.setAttribute('material', 'opacity', 0.92);
    });

    this.el.addEventListener('mouseleave', () => {
      el.setAttribute(
        'scale',
        restScale.x + ' ' + restScale.y + ' ' + restScale.z,
      );
      el.setAttribute('material', 'opacity', 1);
      el.setAttribute('visible', 'true');

      if (videoToPlay && typeof videoToPlay.pause === 'function') {
        videoToPlay.pause();
        videoToPlay.currentTime = 0;
        if (typeof videoToPlay.load === 'function') videoToPlay.load();
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
      const etherModel = document.getElementById('etherModel');
      const images = document.getElementById('todos');

      this.el.addEventListener('mouseenter', () => {
        if (ambientLight) ambientLight.setAttribute('visible', 'false');
        if (spotLight) spotLight.setAttribute('visible', 'true');
        if (images) images.setAttribute('visible', 'false');
        if (etherModel) etherModel.setAttribute('visible', 'true');
      });

      this.el.addEventListener('mouseleave', () => {
        if (ambientLight) ambientLight.setAttribute('visible', 'true');
        if (spotLight) spotLight.setAttribute('visible', 'false');
        if (images) images.setAttribute('visible', 'true');
        if (etherModel) etherModel.setAttribute('visible', 'false');
      });
    });
  },
});
