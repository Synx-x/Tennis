import React from "react";
import styles from "../../styles/components/VideoGallery/Hero.module.scss";
import VideoPlayer from "../VideoPlayer";

const Hero = () => {
	return (
		<section className={styles.container}>
			<VideoPlayer className={styles.vimeoPlayer} />
		</section>
	);
};

export default Hero;
