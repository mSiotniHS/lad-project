import { Article } from "../store/slices/newsSlice";
import axios from "axios";

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

export { fetchArticles };
