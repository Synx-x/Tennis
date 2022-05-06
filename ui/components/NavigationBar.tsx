import React from "react";
import styles from "./../styles/components/NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <a href="/">logo</a>
        </li>
        <div className={styles.menuItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/videolibrary">Video Library</a>
          </li>
        </div>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
