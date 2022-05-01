import React from "react";
import styles from "../styles/components/Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <section className={styles.heroText}>
          <h1>Welcome to Stephens Tennis Academy</h1>
          <h2>Catchy Slogan Goes Here</h2>
        </section>

        <section className={styles.heroGraphic}>
          <div className={styles.desktopContainer}>
            <div className={styles.tabletContainer}></div>
            <div className={styles.mobileContainer}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
