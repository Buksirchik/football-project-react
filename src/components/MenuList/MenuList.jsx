import { useEffect, useState } from "react";
import { API } from "../../api";
import { MenuListItem } from "../MenuListItem";
import "./style.css";

export const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    API.getCompetitions().then(({ data }) => {
      const { competitions } = data;
      setMenuItems([...competitions]);
    });
  }, []);

  return (
    <ul className="football-list">
      {menuItems.map((item) => (
        <MenuListItem item={item} key={item.id}/>
      ))}
    </ul>
  );
};
