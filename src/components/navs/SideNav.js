import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import styles from '../cars/Home.module.css';

const adminLinks = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'MY RESERVATION' },
  { id: 4, path: '/add-car', text: 'ADD CAR' },
  { id: 5, path: '/delete', text: 'DELETE' },
];

const links = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'MY RESERVATION' },
];

const SocialMedia = () => (
  <>
    <div className={styles.socialmedia}>
      <FaTwitter className={styles.icons} />
      <FaFacebookF className={styles.icons} />
      <TiSocialGooglePlus className={styles.icons} />
      <FaVimeoV className={styles.icons} />
      <FaPinterestP className={styles.icons} />
    </div>
    <div>
      <p className={styles.footer}>&copy; 2020 Rent A Car Company</p>
    </div>
  </>
);

const SideNav = () => {
  const data = JSON.parse(localStorage.getItem('user'));
  const { user } = data || {};
  return (
    <div className={styles.sidenav}>
      <ul className={styles.navlinks}>
        {user && user.role === 'admin' ? (adminLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => (isActive
                ? {
                  color: '#fff',
                  backgroundColor: '#97bf0e',
                  padding: '10px',
                  width: '100%',
                }
                : { color: '#3a3a3a', background: 'white', fontWeight: 'bold' })}
            >
              {link.text}
            </NavLink>
          </li>
        ))) : links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => (isActive
                ? {
                  color: '#fff',
                  backgroundColor: '#97bf0e',
                  padding: '10px',
                  width: '100%',
                }
                : { color: '#3a3a3a', background: 'white', fontWeight: 'bold' })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}

      </ul>
      <SocialMedia />
    </div>
  );
};

export default SideNav;
