import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addManyNewsAsync } from "../store/slices/newsSlice";
import ArticleCard from "../components/ArticleCard";
import styles from "./News.module.css";
import Masonry from "react-masonry-css";
import TonalButton from "../components/TonalButton";

const useMountEffect = (fun: React.EffectCallback) => useEffect(fun, [])

const News: FC = () => {
	const news = useAppSelector(state => state.news.articles);
	const dispatch = useAppDispatch();

	useMountEffect(() => { dispatch(addManyNewsAsync()); });

	return (
		<div className={styles.news}>
			<Masonry
				className={styles.grid}
				columnClassName={styles.gridColumn}
				breakpointCols={{ default: 3, 900: 2, 650: 1 }}
			>
				{ news.map(article => <ArticleCard article={article} key={article.url} />) }
			</Masonry>
			<TonalButton onClick={() => dispatch(addManyNewsAsync())} text="Загрузить ещё" />
		</div>
	);
};

export default News;
