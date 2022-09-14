import React, { FC } from "react";
import HighlightCard, { Props } from "../components/HighlightCard";
import { currencies } from "../helpers";
import { formatExchangeRate } from "../helpers/highlightCardFormatters";
import { useAppSelector } from "../store/hooks";
import styles from "./ExchangeRates.module.css";

const ExchangeRates: FC = () => {
	const rates = useAppSelector(state => state.exchangeRates.rates);

	const highlights: Props[] = [];
	const common: Props[] = [];

	for (const currency of currencies) {
		if (currency === "USD" || currency === "EUR") {
			highlights.push(formatExchangeRate(currency, "large", rates[currency]));
		} else {
			common.push(formatExchangeRate(currency, "small", rates[currency]));
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.highlights}>
				{highlights.map((props) => (
					<HighlightCard key={props.subtitle} {...props} />))}
			</div>
			<div className={styles.common}>
				{common.map((props) => (
					<HighlightCard key={props.subtitle} {...props} />))}
			</div>
		</div>
	);
}

export default ExchangeRates;
