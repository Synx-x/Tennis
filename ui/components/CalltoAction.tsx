import React from "react";
import { BallLeft } from "../universalComponents/Icons";
import styles from "../styles/components/CalltoAction.module.scss";

const CalltoAction = () => {
  return (
    <div className={styles.actionContainer}>
      <div className={styles.actionHeader}>
        <h2>Get Started Now</h2>
      </div>
      <div className={styles.actionActions}>
        <button>Book A Session</button>
        <button>Learn Online</button>
      </div>
      <div className={styles.actionContent}>
        <BallLeft />
        <BallLeft />
        <BallLeft />
      </div>
    </div>
  );
};

export default CalltoAction;
