import React from "react";
import styles from "../styles/components/Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";

let comment = [
	{
		Jane: "Our youngest daughter has made incredible progress in her tennis thanks to Steve's coaching! He's an amazing, positive coach who is great with kids. We've received so many compliments on her improvement and we know Steve deserves all the credit. If you know Steve, you'll agree that he's the best coach around!",
	},
	{
		Roxy: "Steve coaches my 3 boys. He is always patient, energetic, encouraging and firm. He teaches and reaches each one of my boys at their individual level. He’s the one in a million special kind of coach!",
	},
	{
		Tracy: "Steve is a fun and encouraging coach that shares hes passion for the game with his students. My kids really love and look forward to their tennis lessons!",
	},
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
