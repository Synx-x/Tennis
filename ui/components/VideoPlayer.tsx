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
	let pictureInPictureWatcher: NodeJS.Timer;
	const [player, setPlayer] = useState<Player | null>(null);

	useEffect(() => {
		if (videoPlayerRef.current !== null) {
			//videoPlayerRef.current.element.focus();
		}

		//return clearInterval(pictureInPictureWatcher);
	}, []);

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
		//if (player === null) return;

		if (document.pictureInPictureEnabled) {
			console.log("exiting Picture in Picture");
			debugger;
			document.exitPictureInPicture();
		}
		//await player.exitPictureInPicture();
	};

	// if (videoPlayerRef.current !== null) {
	// 	//videoPlayerRef.current.focus();
	// 	videoPlayerRef.current.player.element.focus();
	// }
	return (
		<>
			{error ? null : (
				<Vimeo
					ref={videoPlayerRef}
					className={className}
					video={videoState.videoId}
					autoplay={true}
					pip={true}
					responsive={true}
					background={true}
					color={"#0ece35"}
					onError={() => setError(true)}
					onReady={async (player: Player) => setPlayer(player)}
				/>
			)}
		</>
	);
}
