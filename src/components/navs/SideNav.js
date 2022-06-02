import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Home.module.css';

const links = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'MY RESERVATION' },
  { id: 4, path: '/add-car', text: 'ADD CAR' },
  { id: 5, path: '/delete', text: 'DELETE' },
];

const SideNav = () => (
  <div className={styles.sidenav}>
    <ul className={styles.navlinks}>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default SideNav;
