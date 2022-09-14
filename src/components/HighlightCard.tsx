import React, { FC } from "react";
import { classes } from "../helpers";
import styles from "./HighlightCard.module.css";

export interface Props {
	title: string;
	subtitle?: string;
	mainText: string;
	footnote?: string;
	size: "small" | "large";
}

const HighlightCard: FC<Props> = (
	{
		title,
		subtitle,
		mainText,
		footnote,
		size
	}
) => {
	const sizeClass = size === "small" ? styles.small : styles.large;
	return (
		<div className={classes(styles.card, sizeClass)}>
			<div className={styles.titles}>
				<h2 className="label-large">{title}</h2>
				{subtitle &&
					<p className="label-small">{subtitle}</p>}
			</div>
			<p className="display-small">{mainText}</p>
			<p className="label-small">{footnote}</p>
		</div>
	);
}

export default HighlightCard;
