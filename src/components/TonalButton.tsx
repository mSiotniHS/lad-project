import React, { FC } from "react";
import { classes } from "../helpers";
import styles from "./TonalButton.module.css";

interface Props {
	text: string
	onClick: () => void
}

const TonalButton: FC<Props> = ({text, onClick}) => {
	return (
		<button className={classes(styles.button, "label-large")} onClick={onClick}>
			{text}
		</button>
	);
}

export default TonalButton;
