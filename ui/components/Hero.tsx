import React from "react";
import styles from "../styles/components/Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <section>
          <h1>Welcome to Stephens Tennis Academy</h1>
          <h2>Catchy Slogan Goes Here</h2>
        </section>
        <section>Section 2</section>
      </div>
    </>
  );
};

export default Hero;
