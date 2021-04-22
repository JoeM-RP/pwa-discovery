import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppHeader.module.css'
import logo from '../logo.svg';

export const AppHeader: React.FunctionComponent = () => {

    return (
      <nav className={styles.main}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
        <img src={logo} className={styles.logo} alt="logo" />
      </nav>
    );
}

export default AppHeader;