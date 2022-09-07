import React, { FC } from "react";
import NavRailElement from "./NavRailElement";
import styles from "./NavRail.module.css";

const NavRail: FC = () => {
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
				<p>Тема</p>
				<p>Главный цвет</p>
			</div>
		</div>
	);
}

export default NavRail;
