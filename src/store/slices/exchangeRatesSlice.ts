import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchExchangeRates } from "../../services/fetchers";

export interface ExchangeRate {
	price: number;
	dayChange: number;
}

export interface ExchangeRatesState {
	rates: Record<string, ExchangeRate>;
	status: "idle" | "loading";
}

const initialState: ExchangeRatesState = {
	rates: {},
	status: "idle",
}

export const updateExchangeRatesAsync = createAsyncThunk(
	"exchange/fetchRates",
	async () => {
		return await fetchExchangeRates();
	}
);

export const exchangeRatesSlice = createSlice({
	name: "exchange",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateExchangeRatesAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateExchangeRatesAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.rates = action.payload;
			})
	}
});

export default exchangeRatesSlice.reducer;
