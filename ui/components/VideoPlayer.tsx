import React, { useEffect, useRef, useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import { useAdminState } from "../hooks/GlobalState/CurrentVideoState";
import Player from "@vimeo/player";
import useScrollPosition from "../hooks/CurrentScrollPosition";

export default function VideoPlayer({ className }: { className: string }) {
	const videoPlayerRef = useRef<any>(null);
	const [error, setError] = useState<boolean>(false);
	const scrollPosition = useScrollPosition();
	let [videoState] = useAdminState("videoState");
	console.log(scrollPosition);
	const [player, setPlayer] = useState<Player | null>(null);

	useEffect(() => {
		if (player === null) return;

		enterPictureInPicture();
		console.log("entering Picture in Picture");
	}, [scrollPosition > 500]);

	useEffect(() => {
		if (player === null) return;

		exitPictureInPicture();
	}, [scrollPosition < 500]);

	const enterPictureInPicture = async () => {
		if (player === null) return;

		if (!document.pictureInPictureEnabled) {
			await player.requestPictureInPicture();
		}
	};

	const exitPictureInPicture = async () => {
		if (player === null) return;

		if (document.pictureInPictureEnabled) {
			await player.exitPictureInPicture();
		}
	};

	const setQuality = async () => {
		if (player === null) return;

		await player.setQuality("240p");
	};

	return (
		<>
			{videoState.isPlaying ? (
				<Vimeo
					ref={videoPlayerRef}
					className={className}
					video={videoState.videoId}
					autoplay={false}
					pip={true}
					responsive={true}
					background={true}
					color={"#0ece35"}
					onError={() => setError(true)}
					onReady={async (player: Player) => setPlayer(player)}
				/>
			) : (
				<Vimeo
					ref={videoPlayerRef}
					className={className}
					style={{ pointerEvents: "none", userSelect: "none" }}
					video={videoState.videoId}
					autoplay={false}
					responsive={true}
					pip={true}
					muted={true}
					loop
					controls={true}
					showPortrait={false}
					showTitle={false}
					onError={() => setError(true)}
					onReady={async (player: Player) => setPlayer(player)}
				/>
			)}
		</>
	);
}
