import { createGlobalState } from "react-hooks-global-state";

interface IVideoState {
	videoId: number;
}

const { setGlobalState, useGlobalState } = createGlobalState({
	videoState: { videoId: 211479528 } as IVideoState,
});

export const resetVideoState = () => {
	setGlobalState("videoState", { videoId: 0 });
};

export const setVideoState = (videoId: number) => {
	setGlobalState("videoState", {
		videoId: videoId,
	});
};

export { useGlobalState as useAdminState, setGlobalState };
