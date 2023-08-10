import { Container, Nav } from "../";
import styles from "./Header.module.scss";

const HeaderBottom = () => {
	return (
		<div className={styles.header_bottom}>
			<Container>
				<Nav />
			</Container>
		</div>
	);
};

export default HeaderBottom;
