import React from "react";
import styles from "../styles/components/VideoGallery.module.scss";
import VideoCard from "./VideoCard";

const VideoGallery = () => {
	return (
		<div className={styles.galleryContainer}>
			<div className={styles.galleryHeader}>
				<h2>Redefine what tennis is with the best</h2>
			</div>
			<div className={styles.galleryContent}>
				<VideoCard
					buttonVisible={true}
					onClick={() => window.scrollTo(0, 0)}
					context="Home"
				/>

				<VideoCard
					buttonVisible={true}
					onClick={() => window.scrollTo(0, 0)}
					context="Home"
				/>
				<VideoCard
					buttonVisible={true}
					onClick={() => window.scrollTo(0, 0)}
					context="Home"
				/>
			</div>
		</div>
	);
};

export default VideoGallery;
