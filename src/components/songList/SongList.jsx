import { useState } from 'react';
import style from './SongList.module.css';

import { Draggable } from 'react-drag-reorder';

function SongList() {
  const [selected, setSelected] = useState(0);

  const data = [
    {
      num: 1,
      icon: './img/1.png',
      title: 'Beat It',
      playings: '643,786,045',
      time: '4:18',
      album: 'Thriller 25 Sup...',
    },
    {
      num: 2,
      icon: './img/2.png',
      title: 'Beat It 2',
      playings: '643,786,045',
      time: '4:18',
      album: '2Thriller 25 Sup...',
    },
    {
      num: 3,
      icon: './img/3.png',
      title: 'Beat It 3',
      playings: '643,786,045',
      time: '4:18',
      album: '3 Thriller 25 Sup...',
    },
    {
      num: 4,
      icon: './img/4.png',
      title: 'Beat It 4',
      playings: '643,786,045',
      time: '4:18',
      album: '4 Thriller 25 Sup...',
    },
    {
      num: 5,
      icon: './img/5.png',
      title: 'Beat It 5',
      playings: '643,786,045',
      time: '4:18',
      album: '5 Thriller 25 Sup...',
    },
  ];
  const getChangedPos = (currentPos, newPos) => {
    console.log(currentPos, newPos);
  };

  const handelSelected = num => {
    console.log(num, 'nummmmm');
    setSelected(num);
  };
  return (
    <div className={style.songList}>
      <div className={style.upperBar}>
        <p>Popular</p>
        <span>See All</span>
      </div>
      <SongInfo
        item={{
          num: '#',
          icon: '',
          title: 'TITLE',
          playings: 'PLAYING',
          time: 'TIME',
          album: 'ALBUM',
        }}
      />
      <Draggable onPosChange={getChangedPos}>
        {data.map((item, i) => (
          <SongInfo
            item={item}
            key={i}
            handelSelected={handelSelected}
            selected={selected}
          />
        ))}
      </Draggable>
    </div>
  );
}

function SongInfo({ item, handelSelected, selected }) {
  const { num, icon, title, playings, time, album } = item;
  const st = selected === num ? { backgroundColor: '#520000' } : {};
  console.log(st, selected, num);
  const handelClick = () => handelSelected && handelSelected(num);
  return (
    <div className={style.songInfo} onClick={handelClick} style={st}>
      <div className={style.num}>
        <p>{num}</p>
      </div>
      <div className={style.img}>{icon && <img src={icon} alt='icon' />}</div>
      <div className={style.title}>{title}</div>
      <div className={style.playings}>{playings}</div>
      <div className={style.time}>{time}</div>
      <div className={style.album}>{album}</div>
    </div>
  );
}

export default SongList;
