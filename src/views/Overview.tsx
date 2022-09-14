import React, { FC } from "react";
import ArticleCard from "../components/ArticleCard";
import HighlightCard from "../components/HighlightCard";
import { formatExchangeRate, formatIndex } from "../helpers/highlightCardFormatters";
import { useAppSelector } from "../store/hooks";
import styles from "./Overview.module.css";

const Overview: FC = () => {
	const articles = useAppSelector(state => state.news.articles);
	const exchangeRates = useAppSelector(state => state.exchangeRates.rates);
	const indexes = useAppSelector(state => state.indexes.indexes);

	const ratesLoadingStatus = useAppSelector(state => state.exchangeRates.status);
	const indexesLoadingStatus = useAppSelector(state => state.indexes.status);

	const topArticles = articles.slice(0, 2);

	let currencyContent: any;
	if (ratesLoadingStatus === "loading") {
		currencyContent = <p>Loading...</p>;
	} else {
		currencyContent = <>
			<HighlightCard {...formatExchangeRate("USD", "small", exchangeRates["USD"])} />
			<HighlightCard {...formatExchangeRate("EUR", "small", exchangeRates["EUR"])} />
		</>;
	}

	let indexContent: any;
	if (indexesLoadingStatus === "loading") {
		indexContent = <p>Loading...</p>;
	} else if (indexesLoadingStatus === "idle" && indexes["iMOEX"]) {
		indexContent = <HighlightCard {...formatIndex("iMOEX", indexes["iMOEX"])} />;
	}

	return (
		<div className={styles.container}>
			<div className={styles.numberCards}>
				<div className={styles.currencies}>
					{currencyContent}
				</div>
				<div>
					{indexContent}
				</div>
			</div>
			<div className={styles.news}>
				{topArticles.map(article => <ArticleCard article={article} key={article.url} />)}
			</div>
		</div>
	);
}

export default Overview;
