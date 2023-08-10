import { FC } from "react";
import styles from "./Spinner.module.scss";

export const Spinner: FC = () => {
	return (
		<div className={styles.root}>
			<img className={styles.img} src="/img/spinner.svg" alt="Loading..." />
		</div>
	);
};
