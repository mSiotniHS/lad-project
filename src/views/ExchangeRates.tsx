import React, { FC, useEffect } from "react";
import HighlightCard, { Props } from "../components/HighlightCard";
import { currencies, currencyNames } from "../helpers";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateExchangeRatesAsync } from "../store/slices/exchangeRatesSlice";
import styles from "./ExchangeRates.module.css";

function formatPercent(value: number) {
	const sign = value > 0 ? "+" : "";
	return `${sign}${value.toFixed(2)}%`;
}

const ExchangeRates: FC = () => {
	const rates = useAppSelector(state => state.exchangeRates.rates);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(updateExchangeRatesAsync());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const highlights: Props[] = [];
	const common: Props[] = [];

	for (const currency of currencies) {
		const title = currencyNames[currency];
		const subtitle = currency;

		let mainText: string;
		let footnote: string;

		const rate = rates[currency];
		if (rate) {
			mainText = `${rate?.price?.toFixed(1)} ₽`;
			footnote = `${formatPercent(rate?.dayChange) ?? "?"} за день`;
		} else {
			mainText = "Загрузка...";
			footnote = "";
		}

		if (currency === "USD" || currency === "EUR") {
			const size = "large";
			highlights.push({title, subtitle, mainText, footnote, size});
		} else {
			const size = "small";
			common.push({title, subtitle, mainText, footnote, size});
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
