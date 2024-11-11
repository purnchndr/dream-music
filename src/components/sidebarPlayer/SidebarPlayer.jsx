import { useEffect, useState } from 'react';
import style from './SidebarPlayer.module.css';
import { Howl, Howler } from 'howler';

function SidebarPlayer() {
  const sound = new Howl({
    src: [
      'https://aac.saavncdn.com/001/965d3ffbc85612d01e37bced940fa9a5_160.mp4',
    ],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function () {
      console.log('Finished!');
    },
  });

  return (
    <div className={style.sidebarPlayer}>
      <div className={style.playerBox}>
        <Player duration={300} sound={sound} />
      </div>
    </div>
  );
}

function Player({ sound }) {
  const duration = sound.duration() || 0;

  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(false);

  const handelTime = e => {
    setTime(+e.target.value || 0);
    sound.seek(+e.target.value || 0);
  };
  const handelPre = e => {};
  const handelPlay = e => {
    sound.playing() ? sound.pause() : sound.play();
    setPlay(s => {
      return sound.playing();
    });
  };
  const handelNext = e => {};

  useEffect(() => {
    const intervalId = setInterval(() => {
      play && setTime(t => t + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [play, setTime]);
  return (
    <div className={style.player}>
      <p className={style.playing}>Now Playing</p>
      <img className={style.image} src='./img/poster.png' alt='poster' />
      <p className={style.song}>Beat It</p>
      <p className={style.author}>Michael Jackson</p>
      <div className={style.times}>
        <span className={style.time}>
          {getMin(time)}:{getSec(time)}
        </span>
        <input
          className={style.slider}
          type='range'
          value={time}
          onChange={handelTime}
          min={0}
          max={duration || 0}
        />
        <span className={style.time}>
          {getMin(duration)}:{getSec(duration)}
        </span>
      </div>
      <div className={style.playerControl}>
        <img src='./img/rep.png' onClick={null} />
        <img src='./img/pre.png' onClick={handelPre} />
        <img
          src={!play ? './img/play.png' : './img/pause.png'}
          onClick={handelPlay}
        />
        <img src='./img/next.png' onClick={handelNext} />
        <img src='./img/suffle.png' onClick={null} />
      </div>
    </div>
  );
}

function getMin(num) {
  let min = (num / 60).toFixed(0);
  return min < 10 ? `0${min}` : min;
}

function getSec(num) {
  let sec = (num % 60).toFixed(0);
  return sec < 10 ? `0${sec}` : sec;
}

export default SidebarPlayer;
