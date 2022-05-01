import React from "react";
import styles from "../styles/components/TestimonialCard.module.scss";
import { StarIcon } from "../universalComponents/Icons";

const TestimonialCard = () => {
  return (
    <div className={styles.testimonialCardContainer}>
      <div className={styles.testimonialCardHeader}>
        <a>😂</a>
        <h3>John Doe</h3>
        <a>{Array(5).fill(<StarIcon />)}</a>
      </div>

      <div className={styles.testimonialCardContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          perspiciatis natus illum veniam saepe odio sit, porro amet veritatis,
          iusto tempora animi ullam velit pariatur?
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
