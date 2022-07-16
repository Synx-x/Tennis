import React from "react";
import { setVideoState } from "../../hooks/GlobalState/CurrentVideoState";
import { objectToArray } from "../../lib/utils";
import styles from "../../styles/components/VideoGallery/Gallery.module.scss";
import VideoCard from "../VideoCard";

export interface vimeoData {
	id: number;
	title: string;
	description: string;
	url: string;
	upload_date: string;
	thumbnail_small: string;
	thumbnail_medium: string;
	thumbnail_large: string;
	user_id: number;
	user_name: string;
	user_url: string;
	user_portrait_small: string;
	user_portrait_medium: string;
	user_portrait_large: string;
	user_portrait_huge: string;
	stats_number_of_likes: number;
	stats_number_of_plays: number;
	stats_number_of_comments: number;
	duration: number;
	width: number;
	height: number;
	tags: string;
	embed_privacy: string;
}

export const getStaticProps = async () => {
	const res = await fetch(
		`http://vimeo.com/api/v2/user178581340/videos.json`
	);
	const data = await res.json();
	console.log("data", data);
	return {
		props: { data },
	};
};
let videos: vimeoData;

const getVideos = async () => {
	const res = await fetch(
		"http://vimeo.com/api/v2/user178581340/videos.json"
	);
	videos = await res.json();
};

getVideos();
function Gallery({ data }: { data: vimeoData }) {
	const HandleVideoCardClick = (videoId: number) => {
		window.scrollTo(0, 0);
		setVideoState(videoId);
	};

	if (videos === undefined) {
		return <></>;
	} else {
		return (
			<div className={styles.container}>
				<div className={styles.gallerySection}>
					<header>
						<h2>Intro to Tennis Equipment</h2>
					</header>

					<ul className={styles.horizontalMediaScroller}>
						{objectToArray(videos).map(
							(video: any, index) => {
								console.log(video)
								return (
									<li>
										<VideoCard
											buttonVisible={false}
											img={video[1].thumbnail_medium}
											title={video[1].title}
											description={video[1].description}
											onClick={() =>
												HandleVideoCardClick(
													video[1].id
												)
											}
										/>
									</li>
								);
							}
						)}
					</ul>
				</div>

				<div className={styles.gallerySection}>
					<header>
						<h2>Basic Form</h2>
					</header>

					<ul className={styles.horizontalMediaScroller}>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
					</ul>
				</div>

				<div className={styles.gallerySection}>
					<header>
						<h2>Equipment</h2>
					</header>

					<ul className={styles.horizontalMediaScroller}>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
						<li>
							<VideoCard
								buttonVisible={false}
								onClick={() => window.scrollTo(0, 0)}
							/>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Gallery;

// function GalleryItem({
// 	imgsrc,
// 	caption,
// }: {
// 	imgsrc: string;
// 	caption: string;
// }): JSX.Element {
// 	return (
// 		<a href="#">
// 			<figure className={styles.figure}>
// 				<picture>
// 					<img
// 						alt="A placeholder image"
// 						loading="lazy"
// 						src={imgsrc}
// 					/>
// 				</picture>
// 				<figcaption>{caption}</figcaption>
// 			</figure>
// 		</a>
// 	);
// }
