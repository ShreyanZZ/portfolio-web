import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about">
              <a>About</a><br></br><br></br>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
