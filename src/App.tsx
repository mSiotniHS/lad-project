import React, {FC, useEffect} from "react";
import NavRail from "./components/NavRail";
import { Routes, Route } from "react-router-dom";
import News from "./views/News";
import { useAppSelector } from "./store/hooks";

import styles from "./App.module.css";

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
			<main>
				<Routes>
					<Route path="/" element={<h1>Сводка</h1>} />
					<Route path="/news" element={ <News /> } />
					<Route path="/exchange-rates" element={<h1>Курсы валют</h1>} />
					<Route path="/indexes" element={<h1>Показатели</h1>} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
