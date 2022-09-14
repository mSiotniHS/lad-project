import axios from "axios";
import { currencies } from "../helpers";
import { ExchangeRate } from "../store/slices/exchangeRatesSlice";
import { Article } from "../store/slices/newsSlice";

async function fetchArticles(): Promise<Article[]> {
	const response = await axios.get("https://www.kommersant.ru/RSS/section-economics.xml");

	const parser = new DOMParser();
	const xml = parser.parseFromString(response.data, "text/xml");
	const items = xml.querySelectorAll("item");

	const articles: Article[] = [];

	items.forEach(item => {
		const title = item.querySelector("title")?.textContent ?? "";
		const description = item.querySelector("description")?.textContent ?? "";
		const url = item.querySelector("link")?.textContent ?? "";
		const imageUrl = item.querySelector("enclosure")?.getAttribute("url") ?? undefined;

		articles.push({ title, description, url, imageUrl });
	});

	return articles;
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

export { fetchArticles, fetchExchangeRates };
