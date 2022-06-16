import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import styles from './TopNav.module.css';

const TopNav = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const data = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const { user } = data || {};

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    dispatch({ type: 'LOGGED_OUT' });
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  return (
    <div className={styles.topnav}>
      <h2>RentACar</h2>
      <div className={styles.auth}>
        {
        isLoggedIn ? (
          <div className={styles.userInfo}>
            <span>
              Hi
              {' '}
              {user.username}
            </span>

            <span>
              {' '}
              {user.email}
            </span>
            <Button type="button" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <>
            <Button variant="contained"><NavLink to="/sign_in" className={styles.login}>Login</NavLink></Button>
            <Button type="button"><NavLink to="/sign_up" className={styles.signup}>Register</NavLink></Button>
          </>
        )
      }

      </div>
    </div>
  );
};

export default TopNav;
