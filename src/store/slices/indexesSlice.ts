import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchIndexes } from "../../services/fetchers";

export interface Index {
	currency: "RUB" | "USD";
	price: number;
	dayChange?: number;
}

export interface IndexesState {
	indexes: Record<string, Index>;
	status: "idle" | "loading";
}

const initialState: IndexesState = {
	indexes: {},
	status: "idle",
}

export const updateIndexesAsync = createAsyncThunk(
	"indexes/fetchIndexes",
	async () => {
		return await fetchIndexes();
	}
);

export const indexesSlice = createSlice({
	name: "indexes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateIndexesAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateIndexesAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.indexes = action.payload;
			})
	}
});

export default indexesSlice.reducer;
