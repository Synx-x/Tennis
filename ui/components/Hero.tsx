import React from "react";
import styles from "../styles/components/Hero.module.scss";

const Hero = () => {
  return (
		<>
			<div className={styles.heroContainer}>
				<section className={styles.heroText}>
					<h1>Welcome to Stephens Tennis Academy</h1>
					<h2>Catchy Slogan Goes Here</h2>
				</section>

				<section className={styles.heroGraphic}>
					<div className={styles.desktopContainer}>
						<iframe
							src={
								"https://player.vimeo.com/video/732900232?h=95950e1df7&autoplay=1&loop=1"
							}
						></iframe>
						<div className={styles.tabletContainer}>
							<iframe
								src={
									"https://player.vimeo.com/video/732900232?h=95950e1df7&autoplay=1&loop=1"
								}
							></iframe>
						</div>
						<div className={styles.mobileContainer}>
							<iframe
								src={
									"https://player.vimeo.com/video/732900232?h=95950e1df7&autoplay=1&loop=1"
								}
							></iframe>
						</div>
					</div>
				</section>
			</div>
		</>
  );
};

export default Hero;
