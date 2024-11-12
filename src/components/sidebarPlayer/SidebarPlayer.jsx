import { useEffect, useState } from 'react';
import style from './SidebarPlayer.module.css';
import { Howl, Howler } from 'howler';

// import ReactHowler from 'react-howler';

function SidebarPlayer({ data, setSelected }) {
  return (
    <div className={style.sidebarPlayer}>
      <div className={style.playerBox}>
        <Player data={data} setSelected={setSelected} />
      </div>
    </div>
  );
}

function Player({ data, setSelected }) {
  const [sound, setSound] = useState();
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(data.song);
  useEffect(() => {
    const sound = new Howl({
      src: [data.song],
      autoplay: true,
      loop: false,
      volume: 0.5,
      onend: function () {
        console.log('Finished!');
        setSelected('next');
      },
    });
    setSound(sound);
    return () => sound.stop();
  }, [data]);

  const duration = sound?.duration() || 0;

  const handelTime = e => {
    setTime(+e.target.value || 0);
    sound.seek(+e.target.value || 0);
  };

  const handelPre = e => setSelected('pre');
  const handelPlay = e => {
    sound.playing() ? sound.pause() : sound.play();
    setPlay(s => !s);
  };
  const handelNext = e => setSelected('next');

  useEffect(() => {
    const intervalId = setInterval(() => {
      play && setTime(t => t + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [play, setTime]);
  return (
    <div className={style.player}>
      <p className={style.playing}>Now Playing</p>
      {data.poster && (
        <img className={style.image} src={data.poster} alt='poster' />
      )}
      <p className={style.song}>{data.title}</p>
      <p className={style.author}>{data.singer}</p>
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
