import React, { FC } from "react";
import styles from "./ExchangeRates.module.css";
import HighlightCard from "../components/HighlightCard";

const ExchangeRates: FC = () => {
	return (
		<div className={styles.container}>
			<HighlightCard title="Доллар США" subtitle="USD" mainText="60,9 ₽" footnote="+1,5% за день" />
			<HighlightCard title="Евро" subtitle="EUR" mainText="62,1 ₽" footnote="-0,73% за день" />
			<HighlightCard title="Доллар США" subtitle="USD" mainText="25,69" footnote="+1.5% за день" />
			<HighlightCard title="Заголовок 1" mainText="25,69" />
			<HighlightCard title="Заголовок 1" mainText="25,69" />
			<HighlightCard title="Заголовок 1" mainText="25,69" />
			<HighlightCard title="Заголовок 1" mainText="25,69" />
			<HighlightCard title="Заголовок 1" mainText="25,69" />
		</div>
	);
}

export default ExchangeRates;
