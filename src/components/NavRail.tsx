import React, { FC } from "react";
import { ReactComponent as SummaryIcon } from "../style/icons/auto_awesome_mosaic.svg";
import { ReactComponent as ExchangeRatesIcon } from "../style/icons/currency.svg";
import { ReactComponent as IndexesIcon } from "../style/icons/moving.svg";
import { ReactComponent as NewsIcon } from "../style/icons/newspaper.svg";
import styles from "./NavRail.module.css";
import NavRailElement from "./NavRailElement";
import ThemeSwitcher from "./ThemeSwitcher";

const NavRail: FC = () => {
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
			<ThemeSwitcher />
		</div>
	);
}

export default NavRail;
