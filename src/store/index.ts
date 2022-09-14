import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import settingsReducer from "./slices/appSettingsSlice";
import exchangeRatesReducer from "./slices/exchangeRatesSlice";

export const store = configureStore({
	reducer: {
		news: newsReducer,
		settings: settingsReducer,
		exchangeRates: exchangeRatesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
