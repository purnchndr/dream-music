import style from './Poster.module.css';

function Poster() {
  const st = { background: 'url("./img/bg.png")' };
  return (
    <div className={style.poster}>
      <div className={style.box} style={st}>
        <div className={style.info}>
          <div className={style.verified}>
            <img src='./img/ver.png' alt='tik' width='15px' />
            <span>Verified Artist</span>
          </div>
          <h1>Michael Jackson</h1>
          <p>27.852.501 monthly listeners</p>
        </div>
        <img className={style.artist} src='./img/mic.png' alt='artist' />
      </div>
    </div>
  );
}

export default Poster;
