import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { classes } from "../helpers";
import styles from "./NavRailElement.module.css";

interface Props {
	path: string;
	text: string;
	icon: ReactElement
}

const NavRailElement: FC<Props> = ({path, text, icon}) => {
	return (
		<NavLink to={path} className={activeTheme}>
			<div className={styles.iconWrapper}>
				<div className={styles.icon}>
					{icon}
				</div>
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
