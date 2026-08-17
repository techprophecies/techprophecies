AFRAME.registerComponent('raycaster-img', {
  schema: {
    video: {type: 'selector'},
    visible: {type: 'selector'},
  },

  init: function () {
    const el = this.el;
    const videoToPlay = this.data.video;
    const videoVisible = this.data.visible;

    this.el.addEventListener('mouseenter', () => {
      if (videoToPlay && typeof videoToPlay.play === 'function') {
        const play = videoToPlay.play();
        if (play && typeof play.catch === 'function') play.catch(function () {});
      }
      if (videoVisible) videoVisible.setAttribute('visible', 'true');
      el.setAttribute('visible', 'false');
    });

    this.el.addEventListener('mouseleave', () => {
      if (videoToPlay && typeof videoToPlay.pause === 'function') {
        videoToPlay.pause();
        videoToPlay.currentTime = 0;
        if (typeof videoToPlay.load === 'function') videoToPlay.load();
      }
      if (videoVisible) videoVisible.setAttribute('visible', 'false');
      el.setAttribute('visible', 'true');
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
