import { useState } from 'react';
import style from './Header.module.css';

function Header() {
  const [input, setInput] = useState('');
  const handelInput = e => setInput(e.target.value);
  return (
    <header className={style.header}>
      <div className={style.navLinks}>
        <span className={style.navLink}>Music</span>
        <span className={style.navLink}>Podcast</span>
        <span className={style.navLink}>Live</span>
        <span className={style.navLink}>Radio</span>
      </div>
      <div className={style.search}>
        <input
          type='text'
          value={input}
          onChange={handelInput}
          placeholder='Search Here'
        />
        <img src='./img/search.png' alt='search' width='20px' />
      </div>
    </header>
  );
}

export default Header;
