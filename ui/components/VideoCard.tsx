import React from "react";
import styles from "../styles/components/VideoCard.module.scss";

const VideoCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardSnippet}>
        <video muted loop>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.cardInfo}>
        <div>
          <h3>Intro to Tennis Equipment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <button>Visit</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
