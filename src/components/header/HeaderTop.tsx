import { Logo, IconButton, Container, MobileMenu } from "../";
import { mobileMediaQuery } from "../../constants";
import { useMedia } from "../../hooks";
import styles from "./Header.module.scss";

const HeaderTop = () => {
	const isMobile = useMedia(mobileMediaQuery);
	//TODO Доделать input
	return (
		<Container>
			<div className={styles.header_top}>
				{isMobile && <MobileMenu />}
				<Logo className={styles.logo} />
				<IconButton
					src="/img/search.svg"
					ariaLabel="Search..."
					className={styles.search_btn}
				/>
			</div>
		</Container>
	);
};

export default HeaderTop;
