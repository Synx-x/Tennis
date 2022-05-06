import React from "react";
import styles from "../../styles/components/VideoGallery/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <video autoPlay muted loop>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <h1>Start watching</h1>
    </section>
  );
};

export default Hero;
