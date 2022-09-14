import React, { FC } from "react";
import HighlightCard, { Props } from "../components/HighlightCard";
import { formatIndex } from "../helpers/highlightCardFormatters";
import { useAppSelector } from "../store/hooks";
import styles from "./Indexes.module.css";

const Indexes: FC = () => {
	const indexes = useAppSelector(state => state.indexes.indexes);

	const props: Props[] = [];

	for (const index in indexes) {
		props.push(formatIndex(index, indexes[index]));
	}

	return (
		<div className={styles.container}>
			{props.map(prop => <HighlightCard key={prop.title} {...prop} />)}
		</div>
	);
}

export default Indexes;
