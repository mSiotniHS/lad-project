import React, { FC, useEffect } from "react";
import Masonry from "react-masonry-css";
import ArticleCard from "../components/ArticleCard";
import TonalButton from "../components/TonalButton";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addManyNewsAsync } from "../store/slices/newsSlice";
import styles from "./News.module.css";

const News: FC = () => {
	const news = useAppSelector(state => state.news.articles);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(addManyNewsAsync());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.news}>
			<Masonry
				className={styles.grid}
				columnClassName={styles.gridColumn}
				breakpointCols={{default: 3, 900: 2, 650: 1}}
			>
				{news.map(article => <ArticleCard article={article} key={article.url} />)}
			</Masonry>
			<TonalButton onClick={() => dispatch(addManyNewsAsync())} text="Загрузить ещё" />
		</div>
	);
};

export default News;
