import { FC } from "react";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
	return (
		<div className={styles.root}>
			<img className={styles.img} src="/img/spinner.svg" alt="Loading..." />
		</div>
	);
};

export default Loader;
