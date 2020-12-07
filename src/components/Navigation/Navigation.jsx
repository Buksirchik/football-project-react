import { useState } from "react";
import "./style.css";

export const Navigation = ({ children }) => {
  const [isOpen, setToggleMenu] = useState(false);
  const activeMenu = isOpen ? "open" : "";
  const toggleMenuHandler = () => setToggleMenu(!isOpen);

  return (
    <>
      <nav className={`navigation ${activeMenu}`}>
        <div
          className={`menu-icon ${activeMenu}`}
          onClick={toggleMenuHandler}
        ></div>
        <div className="menu-wrap">{children}</div>
      </nav>
      <div
        className={`overlay ${activeMenu}`}
        onClick={toggleMenuHandler}
      ></div>
    </>
  );
};
