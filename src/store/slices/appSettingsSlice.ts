import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
	theme: "light" | "dark";
}

const initialState: SettingsState = {
	theme: "light",
}

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		toggleTheme: (state: SettingsState) => {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		setTheme: (state: SettingsState, action: PayloadAction<"light" | "dark">) => {
			state.theme = action.payload;
		}
	}
});

export const { toggleTheme, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
