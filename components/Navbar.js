/* eslint-disable react-hooks/exhaustive-deps */
import { navigation } from '@/config';
import usePath from '@/hooks/usePath';
import React, { useContext } from 'react';
import styles from '@/styles/Navbar.module.css';
import { MenuToggle } from './MenuToggle';
import { Menu } from './Menu';
import { MobileToggleContext } from '@/contexts/MobileToggleContext';
import useMenuAnimation from '@/hooks/useMenuAnimation';

export default function Navbar() {
  const pathname = usePath();
  const WEBSITE_NAME = process.env.WEBSITE_NAME;

  const { isToggle, setIsToggle } = useContext(MobileToggleContext);

  const scope = useMenuAnimation(isToggle);

  const handleHireMe = () => {
    console.log('hello');
    alert('Hire me...');
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles['pc-wrapper']}>
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
            <button 
              className={styles['hire-me']}
              onClick={handleHireMe}
            >Hire me</button>
          </div>
        </div>
        <div className={styles['mobile-container']}>
          <div 
            className={styles['mobile-logo']}
          >
            <h2>{WEBSITE_NAME}</h2>
          </div>
          <div 
            ref={scope}
            className={styles['mobile-wrapper']}
          >
            <Menu />
            <MenuToggle toggle={() => setIsToggle(!isToggle)} />
          </div>
        </div>
      </div>
    </>
  )
}
