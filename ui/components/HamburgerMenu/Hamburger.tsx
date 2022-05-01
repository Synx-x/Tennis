import React from "react";
import styles from "../../styles/components/HamburgerMenu.module.scss";

interface IHamburgerMenu {
  className?: string;
  onClick: () => void;
}

const Hamburger = (props: IHamburgerMenu) => (
  <button onClick={props.onClick} className={props.className}>
    <span className={styles.hamburger__box}>
      <span className={styles.hamburger__inner} />
    </span>
  </button>
);

export default Hamburger;
