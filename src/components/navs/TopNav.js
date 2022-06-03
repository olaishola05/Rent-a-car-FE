import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import styles from './TopNav.module.css';

const TopNav = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const dispatch = useDispatch();

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
        isLoggedIn ? (<Button type="button" onClick={handleLogout}>Logout</Button>) : (
          <>
            <Button variant="contained"><NavLink to="/sign_in">Login</NavLink></Button>
            <Button type="button"><NavLink to="/sign_up">Register</NavLink></Button>
          </>
        )
      }

      </div>
    </div>
  );
};

export default TopNav;
