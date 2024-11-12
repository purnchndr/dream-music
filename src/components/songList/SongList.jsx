import { useState } from 'react';
import style from './SongList.module.css';

import { Draggable } from 'react-drag-reorder';

function SongList({ data, selected, handelSelected, handelOrder }) {
  const getChangedPos = (currentPos, newPos) => {
    handelOrder(currentPos, newPos);
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
      <Draggable onPosChange={getChangedPos} key={selected}>
        {data.map((item, i) => (
          <SongInfo
            item={item}
            key={item.num}
            handelSelected={handelSelected}
            selected={selected}
            data={data}
          />
        ))}
      </Draggable>
    </div>
  );
}

function SongInfo({ item, handelSelected, selected, data }) {
  const { num, icon, title, playings, time, album, poster } = item;
  const st =
    selected === num
      ? // selected + 1 === num
        { backgroundColor: '#520000', borderLeft: '5px solid red' }
      : {};
  const handelClick = () => handelSelected && handelSelected(num - 1);
  return (
    <div className={style.songInfo} onClick={handelClick} style={st}>
      <div className={style.num}>
        <p>{num}</p>
      </div>
      <div className={style.img}>{icon && <img src={poster} alt='icon' />}</div>
      <div className={style.title}>{title}</div>
      <div className={style.playings}>{playings}</div>
      <div className={style.time}>
        {Number(time) ? `${getMin(time)}:${getSec(time)}` : 'TIME'}
      </div>
      <div className={style.album}>{cropText(album)}</div>
    </div>
  );
}

function cropText(txt) {
  if (txt.length > 18) return txt.substring(0, 18) + '...';
  return txt;
}

function getMin(num) {
  let min = (num / 60).toFixed(0);
  return min < 10 ? `0${min}` : min;
}

function getSec(num) {
  let sec = (num % 60).toFixed(0);
  return sec < 10 ? `0${sec}` : sec;
}

export default SongList;
