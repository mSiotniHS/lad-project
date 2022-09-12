import React, { FC } from "react";
import styles from "./HighlightCard.module.css";

interface Props {
	title: string;
	subtitle?: string;
	mainText: string;
	footnote?: string;
}

const HighlightCard: FC<Props> = ({ title, subtitle, mainText, footnote }) => {
	return (
		<div className={styles.card}>
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
