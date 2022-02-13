import React from 'react';

import arrowLeft from '../../assets/image/left-arrow.svg';
import arrowRight from '../../assets/image/right-arrow.svg';
import house from '../../assets/image/home.svg';
import search from '../../assets/image/search.svg';
import close from '../../assets/image/close.svg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h3>Calculadora de Investimentos</h3>

      <div className={styles.nav}>
        <div>
          <img src={arrowLeft} alt="arrowLeft" />
          <img src={arrowRight} alt="arrowRight" />
          <img src={close} alt="close" />
          <img className={styles.house} src={house} alt="house" />
        </div>

        <input className={styles.input} type="text" readOnly />

        <div className={styles.navSearch}>
          <input className={styles.search} type="text" />
          <img className={styles.iconSearch} src={search} alt="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
