import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExchangeRate {
	price: number; // in rubs
}

export interface ExchangeState {
	rates: Record<string, ExchangeRate>;
	status: "idle" | "loading" | "failed";
}

const initialState: ExchangeState = {
	rates: {
		USD: { price: 60.90 },
		EUR: { price: 70.90 },
	},
	status: "idle",
}

export const exchangeSlice = createSlice({
	name: "exchange",
	initialState,
	reducers: {}
});

export default exchangeSlice.reducer;
