import React from "react";
import { setVideoState } from "../../hooks/GlobalState/CurrentVideoState";
import { useVideoData } from "../../hooks/GlobalState/VideoData";
import { objectToArray } from "../../lib/utils";
import styles from "../../styles/components/VideoGallery/Gallery.module.scss";
import VideoCard from "../VideoCard";

function Gallery() {
	const [videoState] = useVideoData("videoState");
	const { videos } = videoState;
	const HandleVideoCardClick = (videoId: number) => {
		window.scrollTo(0, 0);
		setVideoState(videoId);
	};

	return (
		<div className={styles.container}>
			<div className={styles.gallerySection}>
				<header>
					<h2>Obstacle Challenges</h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					{objectToArray(videos)
						.reverse()
						.map((video: any, index) => {
							return (
								<li>
									<VideoCard
										buttonVisible={false}
										img={video[1].thumbnail_medium}
										title={video[1].title}
										description={video[1].description}
										onClick={() =>
											HandleVideoCardClick(video[1].id)
										}
									/>
								</li>
							);
						})}
				</ul>
			</div>

			<div className={styles.gallerySection}>
				<header>
					<h2>Groundstrokes: Forehand </h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							img={""}
							title={"Forehands, bounce and hit"}
							description={""}
							onClick={() => HandleVideoCardClick(0)}
						/>
					</li>
				</ul>
			</div>

			<div className={styles.gallerySection}>
				<header>
					<h2>Groundstrokes: Backhand </h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							img={""}
							title={"Backhand Demonstration"}
							description={""}
							onClick={() => HandleVideoCardClick(0)}
						/>
					</li>
				</ul>
			</div>

			<div className={styles.gallerySection}>
				<header>
					<h2>Volleys </h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							img={""}
							title={"Forehand and Backhand Volleys"}
							description={""}
							onClick={() => HandleVideoCardClick(0)}
						/>
					</li>
				</ul>
			</div>

			<div className={styles.gallerySection}>
				<header>
					<h2>Serves </h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							img={""}
							title={"Trick Shot 1"}
							description={""}
							onClick={() => HandleVideoCardClick(0)}
						/>
					</li>
				</ul>
			</div>

			<div className={styles.gallerySection}>
				<header>
					<h2>SLO-MO with Targets </h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							img={""}
							title={"Slo-mo Forehand"}
							description={""}
							onClick={() => HandleVideoCardClick(0)}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Gallery;
