import React, { FC } from "react";
import NavRailElement from "./NavRailElement";
import styles from "./NavRail.module.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme } from "../store/slices/appSettingsSlice";

const NavRail: FC = () => {
	const theme = useAppSelector(state => state.settings.theme);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.navRail}>
			<p className="headline-medium">市場</p>
			<nav className={styles.links}>
				<NavRailElement
					path="/"
					text="Сводка"
					iconName="auto_awesome_mosaic"
				/>
				<NavRailElement
					path="/news"
					text="Новости"
					iconName="auto_awesome_mosaic"
				/>
				<NavRailElement
					path="/exchange-rates"
					text="Курсы валют"
					iconName="auto_awesome_mosaic"
				/>
				<NavRailElement
					path="/indexes"
					text="Показатели"
					iconName="auto_awesome_mosaic"
				/>
			</nav>
			<div>
				<button onClick={() => dispatch(toggleTheme())}>{theme}</button>
			</div>
		</div>
	);
}

export default NavRail;
