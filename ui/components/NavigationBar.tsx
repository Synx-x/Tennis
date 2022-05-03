import React from "react";
import styles from "./../styles/components/NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>logo</li>
        <div className={styles.menuItems}>
          <li>Home</li>
          <li>Video Library</li>
        </div>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
