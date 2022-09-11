import React, { FC } from "react";
import styles from "./ArticleCard.module.css";
import { Article } from "../store/slices/newsSlice";

interface Props {
	article: Article
}

const ArticleCard: FC<Props> = ({article: {title, description, url, imageUrl}}) => {
	return (
		<a className={styles.card} href={url} target="_blank" rel="noopener noreferrer">
			{imageUrl &&
				<img src={imageUrl} alt={title}/>
			}
			<div className={styles.text}>
				<h2 className="body-large">{title}</h2>
				<p className="body-medium">{description}</p>
			</div>
		</a>
	);
}

export default ArticleCard;
