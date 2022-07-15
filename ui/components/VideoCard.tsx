import React from "react";
import styles from "../styles/components/VideoCard.module.scss";
import { locationContext } from "../types/types";

const VideoCard = (videoCard: { buttonVisible: boolean, onClick: ()=> void, context?:locationContext }) => {
	
  const { context, buttonVisible, onClick } = videoCard;

	const tagType = context === "Home" ? "div" : "button";

	const Tag = tagType as keyof JSX.IntrinsicElements;

	return (
		<Tag
			onClick={onClick}
			className={
				context === "Home"
					? styles.homeCardContainer
					: styles.cardContainer
			}
		>
			<div className={styles.cardSnippet}>
				<img
					src="https://i.vimeocdn.com/video/1453068902-1b433d1a0a60efe9e3741442a20485628b180cd5676db2388517bf5d3bb7de82-d_640"
					alt=""
				/>
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
		</Tag>
	);
};

export default VideoCard;
