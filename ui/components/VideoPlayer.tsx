import React, { useEffect, useRef, useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import { useAdminState } from "../hooks/GlobalState/CurrentVideoState";
import Player from "@vimeo/player";
import useScrollPosition from "../hooks/CurrentScrollPosition";
import { constants } from "os";

export default function VideoPlayer({ className }: { className: string }) {
	const [error, setError] = useState<boolean>(false);
	const scrollPosition = useScrollPosition();
	const [videoState] = useAdminState("videoState");
	const { isPlaying, videoId } = videoState;
	const [player, setPlayer] = useState<Player | null>(null);
	useEffect(() => {
		if (player === null) return;

		enterPictureInPicture();
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
			{isPlaying ? (
				<Vimeo
					loop
					controls
					pip={true}
					video={videoId}
					autoplay={false}
					showPortrait={false}
					className={className}
					showTitle={isPlaying ? true : false}
					responsive={isPlaying ? false : true}
					onError={() => setError(true)}
					onReady={async (player: Player) => setPlayer(player)}
					style={
						isPlaying
							? { height: "100%" }
							: { pointerEvents: "none", userSelect: "none" }
					}
				/>
			) : (
				<video autoPlay muted loop>
					<source
						src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
						type="video/mp4"
					/>
				</video>
			)}
		</>
	);
}
