import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "../../services/fetchers";

export interface Article {
	title: string;
	description: string;
	url: string;
	imageUrl?: string;
}

export interface NewsState {
	articles: Article[];
	status: "idle" | "loading" | "failed";
}

const initialState: NewsState = {
	articles: [],
	status: "idle",
};

export const addManyNewsAsync = createAsyncThunk(
	"news/fetchNews",
	async () => {
		return await fetchArticles(1);
	}
);

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addManyNewsAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addManyNewsAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.articles.push(...action.payload);
			});
	}
});

export default newsSlice.reducer;
