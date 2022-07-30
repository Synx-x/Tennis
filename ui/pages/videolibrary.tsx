import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import VideoGallery from "../components/VideoLibrary/Gallery";
import Hero from "../components/VideoLibrary/Hero";
import useScrollPosition from "../hooks/CurrentScrollPosition";
import { setVideoData } from "../hooks/GlobalState/VideoData";
import "../styles/global/scrollbarOverlay.module.scss";
import { vimeoData } from "../types/types";

export const getStaticProps = async () => {
	const res = await fetch(
		`http://vimeo.com/api/v2/user178581340/videos.json`
	);
	const data = await res.json();
	return {
		props: { data },
	};
};

const VideoLibrary = React.memo(({ data }: { data: vimeoData[] }) => {
	const scrollPosition = useScrollPosition();
	const scrollbarIsVisible: boolean = scrollPosition > 500 ? false : true;
	setVideoData(data);
	//console.log(data)
	return (
		<>
			<style jsx global>
				{`
					html,
					body {
						overflow: overlay;
					}
					${scrollbarIsVisible &&
					`	::-webkit-scrollbar {
						display: none;
					}`}
				`}
			</style>

			<NavigationBar />
			<Hero />
			<VideoGallery />
			<Footer />
		</>
	);
});

export default VideoLibrary;
