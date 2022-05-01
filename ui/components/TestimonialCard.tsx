import React from "react";
import styles from "../styles/components/TestimonialCard.module.scss";

const TestimonialCard = () => {
  return (
    <div className={styles.testimonialCardContainer}>
      <div className={styles.testimonialCardHeader}>
        <a>😂</a>
        <h3>John Doe</h3>
        <a>5 stars</a>
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
