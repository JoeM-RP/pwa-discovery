import React from 'react';
import styles from './AppHeader.module.css'

import logo from '../logo.svg';
import { UseCache } from './';

export const AppHeader: React.FunctionComponent = () => {

    return (
      <header className={styles.main}>
        <img src={logo} className={styles.logo} alt="logo" />
        <UseCache/>
      </header>
    );
}

export default AppHeader;