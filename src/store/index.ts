import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/appSettingsSlice";
import exchangeRatesReducer from "./slices/exchangeRatesSlice";
import indexesReducer from "./slices/indexesSlice";
import newsReducer from "./slices/newsSlice";

export const store = configureStore({
	reducer: {
		news: newsReducer,
		settings: settingsReducer,
		exchangeRates: exchangeRatesReducer,
		indexes: indexesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
