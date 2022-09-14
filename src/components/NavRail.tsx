import React, { FC } from "react";
import NavRailElement from "./NavRailElement";
import styles from "./NavRail.module.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme } from "../store/slices/appSettingsSlice";

import { ReactComponent as SummaryIcon } from "../style/icons/auto_awesome_mosaic.svg";
import { ReactComponent as NewsIcon } from "../style/icons/newspaper.svg";
import { ReactComponent as ExchangeRatesIcon } from "../style/icons/currency.svg";
import { ReactComponent as IndexesIcon } from "../style/icons/moving.svg";

const NavRail: FC = () => {
	const theme = useAppSelector(state => state.settings.theme);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.navRail}>
			<p className="headline-medium" style={{color: "var(--on-surface)"}}>市場</p>
			<nav className={styles.links}>
				<NavRailElement
					path="/"
					text="Сводка"
					icon={<SummaryIcon />}
				/>
				<NavRailElement
					path="/news"
					text="Новости"
					icon={<NewsIcon />}
				/>
				<NavRailElement
					path="/exchange-rates"
					text="Курсы валют"
					icon={<ExchangeRatesIcon />}
				/>
				<NavRailElement
					path="/indexes"
					text="Показатели"
					icon={<IndexesIcon />}
				/>
			</nav>
			<button onClick={() => dispatch(toggleTheme())}>{theme}</button>
		</div>
	);
}

export default NavRail;
