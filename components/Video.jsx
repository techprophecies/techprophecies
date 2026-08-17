import HoverVideoPlayer from 'react-hover-video-player';

export default function Video({videoSrc, poster, className = ''}) {
  if (!videoSrc) {
    return <img className={className} src={poster} alt="" />;
  }

  return (
    <HoverVideoPlayer
      className={className}
      videoSrc={videoSrc}
      pausedOverlay={
        <img
          src={poster}
          alt=""
          style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
        />
      }
      preload="none"
      muted
      loop
      unloadVideoOnPaused
      sizingMode="container"
      style={{width: '100%', height: '100%', display: 'block'}}
      videoStyle={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
  );
}
