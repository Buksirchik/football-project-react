import { useState } from "react";
import { MenuList } from "../MenuList/MenuList";
import "./style.css";

export const Navigation = () => {
  const [isOpen, setToggleMenu] = useState(false);
  const activeMenu = isOpen ? "open" : "";
  const toggleMenuHandler = () => setToggleMenu(!isOpen);
  console.log(1)
  return (
    <>
      <nav className="navigation">
        <div
          className={`menu-icon ${activeMenu}`}
          onClick={toggleMenuHandler}
        ></div>
        <div className={`menu-wrap ${activeMenu}`}>
          <MenuList toggleMenu={toggleMenuHandler}/>
        </div>
        <div
          className={`overlay ${activeMenu}`}
          onClick={toggleMenuHandler}
        ></div>
      </nav>
    </>
  );
};
