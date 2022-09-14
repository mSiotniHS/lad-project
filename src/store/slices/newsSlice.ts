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
	page: number;
}

const initialState: NewsState = {
	articles: [],
	status: "idle",
	page: 1,
};

export const addManyNewsAsync = createAsyncThunk(
	"news/fetchNews",
	async (_, {dispatch, getState}) => {
		const page = (getState() as any).news.page;
		dispatch(incrementPage());
		return await fetchArticles(page);
	}
);

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		incrementPage: (state) => {
			state.page += 1;
		}
	},
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

export const {incrementPage} = newsSlice.actions;

export default newsSlice.reducer;
