import { useState } from 'react';
import Header from '../header/Header';
import Poster from '../poster/Poster';
import Sidebar from '../sidebar/Sidebar';
import SidebarPlayer from '../sidebarPlayer/SidebarPlayer';
import SongList from '../songList/SongList';
import style from './Main.module.css';

const rawdata = [
  {
    num: 1,
    icon: './img/1.png',
    title: 'Beat It',
    playings: '643,786,045',
    time: '258',
    singer: 'Michael Jackson',
    album: 'HIStory - PAST, PRESENT AND FUTURE - BOOK I',
    song: 'https://aac.saavncdn.com/166/0866a13703ef5e7bb6943baf48cd1edc_160.mp4',
    poster:
      'https://c.saavncdn.com/166/HIStory-PAST-PRESENT-AND-FUTURE-BOOK-I-2007-500x500.jpg',
  },
  {
    num: 2,
    icon: './img/2.png',
    title: 'Thriller',
    playings: '1,601,022',
    time: '358',
    singer: 'Michael Jackson',
    album: 'Thriller',
    song: 'https://aac.saavncdn.com/224/88efb8909b565a32f23044b807310f73_160.mp4',
    poster:
      'https://c.saavncdn.com/224/Thriller-English-1983-20200619131136-500x500.jpg',
  },
  {
    num: 3,
    icon: './img/3.png',
    title: 'Bad (2012 Remaster)',
    playings: '246,896',
    time: '247',
    singer: 'Michael Jackson',
    album: 'Bad (Remastered)',
    song: 'https://aac.saavncdn.com/264/3e95c0886d7d7539f140bd03621407f8_160.mp4',
    poster:
      'https://c.saavncdn.com/264/Bad-Remastered--English-2012-20180627154104-500x500.jpg',
  },
  {
    num: 4,
    icon: './img/4.png',
    title: 'Dangerous',
    playings: '3,709,988',
    time: '420',
    singer: 'Michael Jackson',
    album: 'Dangerous',
    song: 'https://aac.saavncdn.com/832/95755f966802fdf90d148c23100d3178_160.mp4',
    poster:
      'https://c.saavncdn.com/832/Dangerous-English-2009-20180622191213-500x500.jpg',
  },
  {
    num: 5,
    icon: './img/5.png',
    title: 'Billie Jean',
    playings: '205,238',
    time: '296',
    singer: 'Michael Jackson',
    album: 'HIStory - PAST, PRESENT AND FUTURE - BOOK',
    song: 'https://aac.saavncdn.com/166/ddbf799b4d5ccceeac834947d7ce7ec8_160.mp4',
    poster:
      'https://c.saavncdn.com/166/HIStory-PAST-PRESENT-AND-FUTURE-BOOK-I-2007-500x500.jpg',
  },
];

function Main() {
  const [data, setData] = useState(rawdata);
  const [selected, setSelected] = useState('');
  const [song, setSong] = useState({
    poster: '',
    title: '',
    singer: 'Select a song to play',
  });
  const handelSelected = num => {
    let i;
    if (num === 'pre') i = selected > 0 ? selected - 1 : selected;
    else if (num === 'next')
      i = selected < data.length - 1 ? selected + 1 : selected;
    else i = num;
    console.log(num, i);
    setSelected(i);
    setSong(data[i]);
  };
  const handelOrder = (i, j) => {
    const d = [...data];
    const newData = d.toSpliced(i, 1).toSpliced(j, 0, data[i]);
    setData(newData);
  };

  return (
    <div className={style.main}>
      <Sidebar />
      <div className={style.mainPlayer}>
        <MainPage
          data={data}
          selected={selected}
          handelSelected={handelSelected}
          handelOrder={handelOrder}
        />
      </div>
      <SidebarPlayer data={song} key={selected} setSelected={handelSelected} />
    </div>
  );
}

function MainPage({ data, selected, handelSelected, handelOrder }) {
  return (
    <>
      <Header />
      <Poster />
      <SongList
        data={data}
        selected={data[selected]?.num || 0}
        handelSelected={handelSelected}
        handelOrder={handelOrder}
      />
    </>
  );
}

export default Main;
