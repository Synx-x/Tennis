import React from "react";
import styles from "../styles/components/TestimonialCard.module.scss";
import { FaceIcon, StarIcon } from "../universalComponents/Icons";

let comments = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          perspiciatis natus illum veniam saepe odio sit, porro amet veritatis,
          iusto tempora animi ullam velit pariatur?`;

const TestimonialCard = ({ name = "John Doe", stars = 5, comment = comments }: {name: string, stars: number, comment: string}) => {
  return (
    <div className={styles.testimonialCardContainer}>
      <div className={styles.testimonialCardHeader}>
        <a>
          <FaceIcon />
        </a>
        <h3>{name}</h3>
        <a>{Array(stars).fill(<StarIcon />)}</a>
      </div>

      <div className={styles.testimonialCardContent}>
        <p>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
