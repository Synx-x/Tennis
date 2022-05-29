import { createGlobalState } from "react-hooks-global-state";

interface IVideoState {
	videoId: number;
	isPlaying: boolean;
}

const { setGlobalState, useGlobalState } = createGlobalState({
	videoState: { videoId: 211479528, isPlaying: false } as IVideoState,
});

export const resetVideoState = () => {
	setGlobalState("videoState", { videoId: 211479528, isPlaying: false });
};

export const setVideoState = (videoId: number) => {
	setGlobalState("videoState", {
		videoId: videoId,
		isPlaying: true,
	});
};

export { useGlobalState as useAdminState, setGlobalState };
