import React from "react";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <h2>Discovering Your True Potential</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          nulla velit corrupti iusto itaque dolore dolorem sapiente earum fugit
          sed temporibus atque harum voluptates tenetur.
        </p>
      </div>
      <footer className={styles.footerMain}>
        <a href="/">Logo</a>
        <p>© 2022 Stephen Cross. All Rights Reserved. </p>
        <menu>
          <li>Facebook</li>
          <li>Whatsapp</li>
          <li>Twitter</li>
        </menu>
      </footer>
    </div>
  );
};

export default Footer;
