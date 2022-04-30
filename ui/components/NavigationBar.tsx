import React from "react";
import styles from "./../styles/components/NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>logo</li>
        <li>Home</li>
        <li>Video Library</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
