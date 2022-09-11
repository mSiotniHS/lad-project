import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavRailElement.module.css";
import { classes } from "../helpers";

const iconPath = process.env.PUBLIC_URL + "/icons/";

interface Props {
	path: string;
	text: string;
	iconName: string;
}

const NavRailElement: FC<Props> = ({ path, text, iconName }) => {
	return (
		<NavLink to={path} className={activeTheme}>
			<div className={styles.iconWrapper}>
				<img className={styles.icon} src={`${iconPath}${iconName}.svg`} alt={iconName} />
			</div>
			<p className={classes(styles.text, "label-medium")}>{text}</p>
		</NavLink>
	);
};

function activeTheme(props: { isActive: boolean }): string {
	if (props.isActive) {
		return classes(styles.element, styles.active);
	} else {
		return styles.element;
	}
}

export default NavRailElement;
