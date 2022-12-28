import React from "react";
import { setVideoState } from "../../hooks/GlobalState/CurrentVideoState";
import { useVideoData } from "../../hooks/GlobalState/VideoData";
import { objectToArray } from "../../lib/utils";
import styles from "../../styles/components/VideoGallery/Gallery.module.scss";
import { vimeoData } from "../../types/types";
import VideoCard from "../VideoCard";

function Gallery() {
	const [videoState] = useVideoData("videoState");
	const { videos } = videoState;
	const HandleVideoCardClick = (videoId: number) => {
		window.scrollTo(0, 0);
		setVideoState(videoId);
	};

	let tagList = objectToArray(videos)
	
	return (
		<div className={styles.container}>
			<div className={styles.gallerySection}>
				<header>
					<h2>Learn With Steve!</h2>
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
		</div>
	);
}

export default Gallery;
