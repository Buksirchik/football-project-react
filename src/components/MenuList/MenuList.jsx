import { NavLink } from "react-router-dom";
import "./style.css";

const links = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/tournaments",
    name: "Tournaments"
  }
];

export const MenuList = ({ toggleMenu }) => {
  return (
    <ul className="nav-links">
      {links.map((link, id) => (
        <li className="nav-links__row" key={id}>
          <NavLink
            className="nav-links__item"
            to={link.path}
            onClick={toggleMenu}
          >
            <p className="nav-links__name">{link.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
