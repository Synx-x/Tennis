//Core
import React from "react";
import styles from "../../styles/components/HamburgerMenu.module.scss";

interface IMenu {
  className?: string;
}

const Menu = (props: IMenu) => (
  <div className={props.className}>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <a href="">ABC</a>{" "}
      </li>
      <li className={styles.navigation__item}>
        <a href="">DEF</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="">GHI</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="">JKL</a>
      </li>
    </ul>
  </div>
);

export default Menu;
