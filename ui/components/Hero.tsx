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
            <video autoPlay muted loop>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
            <div className={styles.tabletContainer}>
              <video autoPlay muted loop>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className={styles.mobileContainer}>
              <video autoPlay muted loop>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
