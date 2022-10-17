import React from "react";
import styles from "../styles/components/Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";

let comment = [
  { Jane: "My youngest daughter started sessions with Steve towards the end of 2021. Within 4 weeks, she was playing beautiful tennis. We constantly get compliments about how much she's approved in her tennis, but these compliments should all go to Steve! Anyone that knows Steve will agree, he is the most amazing, funny and positive coach around! He will always build his students up in such a way.  He is absolutely amazing with kids." },
  { Roxy: "Steve coaches my 3 boys. He is always patient, energetic, encouraging and firm. He teaches and reaches each one of my boys at their individual level. He’s the one in a million special kind of coach!" },
  { Tracy: "Steve is a fun and encouraging coach that shares hes passion for the game with his students. My kids really love and look forward to their tennis lessons!" },
];


export const Testimonial = () => {
  return (
		<div className={styles.testimonialContainer}>
			<div className={styles.testimonialHeader}>
				<h3>Testimonials</h3>
				<h2>See The Change</h2>
			</div>

			<div className={styles.testimonialContent}>
				<TestimonialCard
					stars={5}
					comment={comment[0].Jane!}
					name={"Jane"}
				/>
				<TestimonialCard
					stars={5}
					comment={comment[1].Roxy!}
					name={"Roxy"}
				/>
				<TestimonialCard
					stars={5}
					comment={comment[2].Tracy!}
					name={"Tracy"}
				/>
			</div>
		</div>
  );
};
