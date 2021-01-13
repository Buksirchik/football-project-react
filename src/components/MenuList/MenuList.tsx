import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

type LType = {
  path: string;
  name: string;
};

const links: LType[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/profile',
    name: 'Profile',
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
  },
];

type PropTypes = {
  toggleMenu: () => void;
};

export const MenuList = ({ toggleMenu }: PropTypes): React.ReactElement => {
  return (
    <ul className='nav-links'>
      {links.map((link, id) => (
        <li className='nav-links__row' key={id}>
          <NavLink className='nav-links__item' to={link.path} onClick={toggleMenu} exact={true}>
            <p className='nav-links__name'>{link.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
