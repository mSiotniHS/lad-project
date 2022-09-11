import React, { FC } from "react";
import styles from "./TonalButton.module.css";
import { classes } from "../helpers";

interface Props {
	text: string
	onClick: () => void
}

const TonalButton: FC<Props> = ({ text, onClick }) => {
	return (
		<button className={classes(styles.button, "label-large")} onClick={onClick}>
			{text}
		</button>
	);
}

export default TonalButton;
