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
		//setQuality();
	}, [player !== null]);

	useEffect(() => {
		if (player === null) return;

		enterPNP();
		console.log("entering Picture in Picture");
	}, [scrollPosition > 500]);

	useEffect(() => {
		if (player === null) return;

		exitPNP();
	}, [scrollPosition < 500]);

	const enterPNP = async () => {
		if (player === null) return;

		await player.requestPictureInPicture();
	};

	const exitPNP = async () => {
		if (player === null) return;

		if (document.pictureInPictureEnabled) {
			console.log("exiting Picture in Picture");
			await player.exitPictureInPicture();
		}
	};

	const setQuality = async () => {
		if (player === null) return;

		await player.setQuality("240p");
	};

	// if (videoPlayerRef.current !== null) {
	// 	//videoPlayerRef.current.focus();
	// 	videoPlayerRef.current.player.element.focus();
	// }
	return (
		<>
			{videoState.isPlaying ? (
				<Vimeo
					ref={videoPlayerRef}
					className={className}
					video={videoState.videoId}
					autoplay={true}
					pip={true}
					responsive={false}
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
					autoplay={true}
					responsive={false}
					pip={true}
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
