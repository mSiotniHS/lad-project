import React, {FC, useEffect} from "react";

import styles from "./News.module.css";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addManyNewsAsync } from "../store/slices/newsSlice";
import ArticleCard from "../components/ArticleCard";

const News: FC = () => {
	const news = useAppSelector(state => state.news.articles);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (news.length === 0) {
			dispatch(addManyNewsAsync());
		}
	});

	return (
		<div className={styles.news}>
			<h1>Новости</h1>
			{ news.map(article => <ArticleCard article={article} />) }
		</div>
	);
};

export default News;
