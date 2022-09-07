import React, { FC } from "react";
import styles from "./ArticleCard.module.css";
import { Article } from "../store/slices/newsSlice";
import { classes } from "../helpers";

interface Props {
	article: Article
}

const ArticleCard: FC<Props> = ({ article: { title, description, url, imageUrl } }) => {
	return (
		<div className={styles.card}>
			{imageUrl &&
				<img src={imageUrl} alt={title} />
			}
			<div className={styles.text}>
				<h2 className={classes("body-large")}>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ArticleCard;
