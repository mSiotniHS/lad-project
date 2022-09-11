import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "../../services/fetchers";

export interface Article {
	title: string;
	description: string;
	url: string;
	imageUrl: string | null;
}

export interface NewsState {
	  articles: Article[];
	  status: "idle" | "loading" | "failed";
}

const initialState: NewsState = {
	articles: [
		{
			title: "Экс-глава МИД Австрии считает, что Европа сама спровоцировала энергетический кризис",
			description: "Экс-глава МИД Австрии Карин Кнайсль не считает Россию виновной в европейском энергокризисе. По ее мнению, начался он в прошлом году по вине самих европейских политиков.",
			url: "https://www.kommersant.ru/doc/5558021",
			imageUrl: "https://www.kommersant.ru/Issues.photo/NEWS/2022/09/11/KMO_189886_00635_1_t219_100811.jpg"
		},
		{
			title: "Росстат ухудшил оценку падения ВВП во втором квартале до 4,1%",
			description: "Федеральная служба государственной статистики (Росстат) ухудшила оценку спада ВВП во втором квартале 2022 года до 4,1%, общий объем ВВП — 34,663 трлн руб.",
			url: "https://www.kommersant.ru/doc/5557518",
			imageUrl: null
		},
		{
			title: "Объем ФНБ снизился на 285,9 млрд рублей",
			description: "Министерство финансов отчиталось о размещении средств Фонда национального благосостояния (ФНБ) за 2022 год.",
			url: "https://www.kommersant.ru/doc/5557480",
			imageUrl: null
		},
		{
			title: "Профицит консолидированного бюджета в январе--июле составил 2,1 трлн рублей",
			description: "Консолидированный бюджет России за первые семь месяцев текущего года исполнен с профицитом 2 трлн 124,8 млрд руб.",
			url: "https://www.kommersant.ru/doc/5549762",
			imageUrl: null
		},
		{
			title: "Госдолг еврозоны достиг 97% суммарного ВВП",
			description: "В результате череды кризисов госдолг стран зоны евро достиг 97% их суммарного ВВП. Об этом сообщил еврокомиссар по вопросам экономики Паоло Джентилони.",
			url: "https://www.kommersant.ru/doc/5549704",
			imageUrl: "https://www.kommersant.ru/Issues.photo/NEWS/2022/09/09/KMO_096855_29538_1_t219_111502.jpg"
		},
	],
	status: "idle",
};

export const addManyNewsAsync = createAsyncThunk(
	"news/fetchNews",
	async () => {
		return await fetchArticles();
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
