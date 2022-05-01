import React from "react";
import styles from "../styles/components/Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialHeader}>
        <h3>Testimonials</h3>
        <h2>See The Change</h2>
      </div>

      <div className={styles.testimonialContent}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
