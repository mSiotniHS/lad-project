import axios from "axios";
import { currencies } from "../helpers";
import { ExchangeRate } from "../store/slices/exchangeRatesSlice";
import { Index } from "../store/slices/indexesSlice";
import { Article } from "../store/slices/newsSlice";

async function fetchArticles(page: number): Promise<Article[]> {
	const response = await axios.get(
		"https://newsapi.org/v2/everything", {
			params: {
				"q": "рынок OR рынки OR рынка OR рынков OR нефть OR нефти OR экономика OR экономики",
				"language": "ru",
				"pageSize": 9,
				"page": page,
				"apiKey": process.env.REACT_APP_NEWS_API_KEY,
			}
		}
	);

	const data = response.data;

	return data["articles"].map((article: any) => {
		return {
			title: article["title"],
			description: article["description"],
			url: article["url"],
			imageUrl: article["urlToImage"],
		}
	});
}

async function fetchExchangeRates(): Promise<Record<string, ExchangeRate>> {
	const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
	const data = response.data;

	const rates: Record<string, ExchangeRate> = {};

	for (const currency of currencies) {
		if (data["Valute"][currency]) {
			const nominal = data["Valute"][currency].Nominal;
			const value = data["Valute"][currency]["Value"] / nominal;
			const previous = data["Valute"][currency]["Previous"] / nominal;

			rates[currency] = {
				price: value,
				dayChange: (value - previous) / previous,
			};
		}
	}

	return rates;
}

async function fetchIndexes(): Promise<Record<string, Index>> {
	return {
		"iMOEX": await fetchIMOEXIndex(),
		...(await fetchCommodities()),
	};
}

async function fetchIMOEXIndex(): Promise<Index> {
	const response = await axios.get("https://iss.moex.com/iss/engines/stock/markets/index/securities/IMOEX.json");
	const data = response.data;

	return {
		currency: "RUB",
		price: data["marketdata"]["data"][0][4],
		dayChange: data["marketdata"]["data"][0][9],
	};
}

async function fetchCommodities(): Promise<Record<string, Index>> {
	const response = await axios.get(
		"https://www.commodities-api.com/api/latest",
		{
			params: {
				"access_key": process.env.REACT_APP_COMMODITIES_API_KEY,
				"base": "RUB",
				"symbols": "BRENTOIL,XAU,XAG",
			}
		}
	);

	const data = response.data;

	return {
		"Gold": {price: 1 / data["data"]["rates"]["XAU"], currency: "RUB"},
		"Silver": {price: 1 / data["data"]["rates"]["XAG"], currency: "RUB"},
		"Brent": {price: 1 / data["data"]["rates"]["BRENTOIL"], currency: "RUB"},
	};
}

export { fetchArticles, fetchExchangeRates, fetchIndexes };
