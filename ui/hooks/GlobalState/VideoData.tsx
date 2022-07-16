import { createGlobalState } from "react-hooks-global-state";
import { vimeoData } from "../../types/types";

interface IVideoState {
	videos: vimeoData[];
}

const { setGlobalState, useGlobalState } = createGlobalState({
	videoState: { videos: [] } as IVideoState,
});

export const resetVideoData = () => {
	setGlobalState("videoState", { videos: [] });
};

export const setVideoData = (videos: vimeoData[]) => {
	setGlobalState("videoState", {
		videos,
	});
};

export { useGlobalState as useVideoData, setGlobalState };
