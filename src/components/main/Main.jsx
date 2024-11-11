import Header from '../header/Header';
import Poster from '../poster/Poster';
import Sidebar from '../sidebar/Sidebar';
import SidebarPlayer from '../sidebarPlayer/SidebarPlayer';
import SongList from '../songList/SongList';
import style from './Main.module.css';

function Main() {
  return (
    <div className={style.main}>
      <Sidebar />
      <div className={style.mainPlayer}>
        <MainPage />
      </div>
      <SidebarPlayer />
    </div>
  );
}

function MainPage() {
  return (
    <>
      <Header />
      <Poster />
      <SongList />
    </>
  );
}

export default Main;
