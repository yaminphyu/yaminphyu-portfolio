import { navigation } from '@/config';
import usePath from '@/hooks/usePath';
import React from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const pathname = usePath();
  const WEBSITE_NAME = process.env.WEBSITE_NAME;

  return (
    <>
      <div className={styles.container}>
        <div></div>
        <div className={styles.wrapper}>
          <ul className={styles.menu}>
            {
              navigation.map((item, index) => (
                <li 
                  key={index} 
                  className={`
                    ${styles.item}
                    ${(pathname === item.href && item.name !== WEBSITE_NAME) ? styles['item-active'] : item.name === WEBSITE_NAME ? styles.title : styles['item-unactive']}
                  `}
                >
                  <a
                    className={`${(pathname === item.href && item.name !== WEBSITE_NAME) ? styles['item-underline'] : ''}`}
                    href={item.href}
                  >{item.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.wrapper}>
          <button className={styles['hire-me']}>Hire me</button>
        </div>
      </div>
    </>
  )
}
