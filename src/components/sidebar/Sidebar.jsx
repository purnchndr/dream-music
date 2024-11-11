import style from './Sidebar.module.css';
function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.upperMenu}>
        <div style={style.logo}>
          <img src='./img/Logo.png' height='42px' alt='logo' />
        </div>
        <div className={style.menu}>
          <p>MENU</p>
          <div className={style.menuItem}>
            <img src='/img/menu0.png' alt='menu' /> <span>Home</span>
          </div>
          <div className={style.menuItem}>
            <img src='/img/menu1.png' alt='menu' /> <span>Trends</span>
          </div>
          <div className={style.menuItem}>
            <img src='/img/menu2.png' alt='menu' /> <span>Library</span>
          </div>
          <div className={style.menuItem}>
            <img src='/img/menu3.png' alt='menu' /> <span>Discover</span>
          </div>
        </div>
      </div>
      <div className={style.settings}>
        <p>Settings</p>
        <div className={style.setting}>
          <div className={style.settingItem}>
            <img src='/img/set1.png' alt='setting' /> <span>Settings</span>
          </div>
          <div className={style.settingItem}>
            <img src='/img/set2.png' alt='setting' /> <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
