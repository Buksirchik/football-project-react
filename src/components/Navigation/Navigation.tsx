import React, { useState } from 'react';
import { MenuList } from '../MenuList/MenuList';
import { ThemeSwitcher } from '../ThemeSwitcher';
import './style.css';

export const Navigation = (): React.ReactElement => {
  const [isOpen, setToggleMenu] = useState<boolean>(false);
  const activeMenu = isOpen ? 'open' : '';
  const toggleMenuHandler = () => setToggleMenu(!isOpen);
  return (
    <>
      <nav className='navigation'>
        <div className={`menu-icon ${activeMenu}`} onClick={toggleMenuHandler}></div>
        <div className={`menu-wrap ${activeMenu}`}>
          <MenuList toggleMenu={toggleMenuHandler} />
        </div>
        <div className={`overlay ${activeMenu}`} onClick={toggleMenuHandler}></div>
        <ThemeSwitcher />
      </nav>
    </>
  );
};
