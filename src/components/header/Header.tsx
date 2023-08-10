import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { useMedia } from "../../hooks";
import { mobileMediaQuery } from "../../constants";
import styles from "./Header.module.scss";

const Header = () => {
	const isMobile = useMedia(mobileMediaQuery);

	return (
		<header className={styles.header}>
			<HeaderTop />
			{!isMobile && <HeaderBottom />}
		</header>
	);
};

export default Header;
