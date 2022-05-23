import React from "react";
import styles from "../styles/components/VideoCard.module.scss";
import { locationContext } from "../types/types";

const VideoCard = (videoCard: { buttonVisible: boolean, onClick: ()=> void, context?:locationContext }) => {
	
  const { context, buttonVisible, onClick } = videoCard;

  return (
		<div
			onClick={onClick}
			className={
				context === "Home"
					? styles.homeCardContainer
					: styles.cardContainer
			}
		>
			<div className={styles.cardSnippet}>
				<video autoPlay muted loop>
					<source
						src="https://www.w3schools.com/html/mov_bbb.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<div
				className={
					context === "Home" ? styles.homeCardInfo : styles.cardInfo
				}
			>
				<div>
					<h3>Intro to Tennis Equipment</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				{buttonVisible && (
					<div>
						<button>Visit</button>
					</div>
				)}
			</div>
		</div>
  );
};

export default VideoCard;
