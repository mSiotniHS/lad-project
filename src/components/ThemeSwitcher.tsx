import React, {FC} from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme } from "../store/slices/appSettingsSlice";
import styles from "./ThemeSwitcher.module.css";

import { ReactComponent as DarkIcon } from "../style/icons/dark_mode.svg";
import { ReactComponent as LightIcon } from "../style/icons/light_mode.svg";

const ThemeSwitcher: FC = () => {
	const theme = useAppSelector(state => state.settings.theme);
	const dispatch = useAppDispatch();

	const icon = theme === "dark" ? <DarkIcon /> : <LightIcon />;

	return (
		<button className={styles.button} onClick={() => dispatch(toggleTheme())}>
			{icon}
		</button>
	);
}

export default ThemeSwitcher;
