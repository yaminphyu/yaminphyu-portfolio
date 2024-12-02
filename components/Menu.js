/* eslint-disable react-hooks/exhaustive-deps */
import { navigation } from "@/config";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";

export function Menu() {
  const WEBSITE_NAME = process.env.WEBSITE_NAME;

  const [naviArr, setNaviArr] = useState(() => 
    navigation?.filter((item) => item.name !== WEBSITE_NAME) || []
  );

  return (
    <nav className={styles['mobile-menu']}>
      <ul className={styles['mobile-menu-list']}>
          {
            naviArr.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
            ))
          }
      </ul>
    </nav>
  );
}
  