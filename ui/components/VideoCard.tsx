import React from "react";
import styles from "../styles/components/VideoCard.module.scss";
import { locationContext } from "../types/types";

const VideoCard = (videoCard: {
	buttonVisible: boolean;
	onClick: () => void;
	context?: locationContext;
	img: string;
	title: string;
	description: string;
}) => {
	const { context, buttonVisible, onClick, img, title, description } =
		videoCard;

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
				<img src={img} alt={title} />
			</div>
			<div
				className={
					context === "Home" ? styles.homeCardInfo : styles.cardInfo
				}
			>
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
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
