import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import NavRail from "./components/NavRail";
import { useAppSelector } from "./store/hooks";
import ExchangeRates from "./views/ExchangeRates";
import News from "./views/News";

const App: FC = () => {
	const theme = useAppSelector(state => state.settings.theme);

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.setAttribute("data-theme", "dark");
		} else {
			root.removeAttribute("data-theme");
		}
	}, [theme]);

	return (
		<div className={styles.base}>
			<NavRail />
			<main className={styles.main}>
				<Routes>
					<Route path="/" element={<h1>Сводка</h1>} />
					<Route path="/news" element={<News />} />
					<Route path="/exchange-rates" element={<ExchangeRates />} />
					<Route path="/indexes" element={<h1>Показатели</h1>} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
