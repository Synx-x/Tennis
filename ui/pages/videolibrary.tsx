import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import VideoGallery from "../components/VideoLibrary/Gallery";
import Hero from "../components/VideoLibrary/Hero";
import useScrollPosition from "../hooks/CurrentScrollPosition";
import "../styles/global/scrollbarOverlay.module.scss";

const VideoLibrary = React.memo(() => {
	const scrollPosition = useScrollPosition();
	const scrollbarIsVisible: boolean = scrollPosition > 500 ? false : true;

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
