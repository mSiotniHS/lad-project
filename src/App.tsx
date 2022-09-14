import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import NavRail from "./components/NavRail";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateExchangeRatesAsync } from "./store/slices/exchangeRatesSlice";
import { updateIndexesAsync } from "./store/slices/indexesSlice";
import { addManyNewsAsync } from "./store/slices/newsSlice";
import ExchangeRates from "./views/ExchangeRates";
import Indexes from "./views/Indexes";
import News from "./views/News";
import Overview from "./views/Overview";

const App: FC = () => {
	const theme = useAppSelector(state => state.settings.theme);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.setAttribute("data-theme", "dark");
		} else {
			root.removeAttribute("data-theme");
		}
	}, [theme]);

	useEffect(() => {
		dispatch(addManyNewsAsync());
		dispatch(updateIndexesAsync());
		dispatch(updateExchangeRatesAsync());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.base}>
			<NavRail />
			<main className={styles.main}>
				<Routes>
					<Route path="/" element={<Overview />} />
					<Route path="/news" element={<News />} />
					<Route path="/exchange-rates" element={<ExchangeRates />} />
					<Route path="/indexes" element={<Indexes />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
