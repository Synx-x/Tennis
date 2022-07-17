import { createGlobalState } from "react-hooks-global-state";

type colorScheme = "light" | "dark" | "grape" | "dim";

interface IColorSchemeState {
	theme: colorScheme;
}

const { setGlobalState, useGlobalState } = createGlobalState({
	colorSchemeState: { theme: "light" } as IColorSchemeState,
});

export const resetColorScheme = () => {
	setGlobalState("colorSchemeState", { theme: "light" });
};

export const setColorScheme = (theme: colorScheme) => {
	setGlobalState("colorSchemeState", {
		theme: theme,
	});
};

export { useGlobalState as useColorScheme, setGlobalState };
