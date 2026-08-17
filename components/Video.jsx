import HoverVideoPlayer from 'react-hover-video-player';

import MarkLoader from './MarkLoader';

const fill = {width: '100%', height: '100%', objectFit: 'cover', display: 'block'};

const loadingWrap = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.35)',
};

export default function Video({videoSrc, poster, className = ''}) {
  if (!videoSrc) {
    return <img className={className} src={poster} alt="" />;
  }

  return (
    <HoverVideoPlayer
      className={className}
      videoSrc={videoSrc}
      pausedOverlay={
        <img src={poster} alt="" style={fill} />
      }
      loadingOverlay={
        <div style={loadingWrap}>
          <MarkLoader size="sm" pulse />
        </div>
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
