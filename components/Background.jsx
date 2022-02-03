import styled from 'styled-components';

const BackgroundStyles = styled.div`
  z-index: 0;
  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-webkit-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-moz-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-ms-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-webkit-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-moz-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-ms-keyframes move-clouds-back {
    from {
      background-position: 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  .stars,
  .twinkling,
  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    display: block;
  }
  .stars {
    background: #000
      url('http://www.script-tutorials.com/demos/360/images/stars.png') repeat
      top center;
    z-index: 0;
  }
  .twinkling {
    background: transparent
      url('http://www.script-tutorials.com/demos/360/images/twinkling.png')
      repeat top center;
    z-index: 1;

    -moz-animation: move-twink-back 200s linear infinite;
    -ms-animation: move-twink-back 200s linear infinite;
    -o-animation: move-twink-back 200s linear infinite;
    -webkit-animation: move-twink-back 200s linear infinite;
    animation: move-twink-back 200s linear infinite;
  }
  .clouds {
    background: transparent url('./assets/images/cloudsblue.png') repeat top
      center;
    z-index: 3;

    -moz-animation: move-clouds-back 200s linear infinite;
    -ms-animation: move-clouds-back 200s linear infinite;
    -o-animation: move-clouds-back 200s linear infinite;
    -webkit-animation: move-clouds-back 200s linear infinite;
    animation: move-clouds-back 200s linear infinite;
  }
`;

export default function Background() {
  return (
    <BackgroundStyles id="card-background">
      <div className="stars" />
      <div className="twinkling" />
      <div className="clouds" />
    </BackgroundStyles>
  );
}
