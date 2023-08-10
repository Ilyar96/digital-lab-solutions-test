import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { useMedia, useScrollDirection } from "../../hooks";
import { mobileMediaQuery } from "../../constants";
import styles from "./Header.module.scss";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const isMobile = useMedia(mobileMediaQuery);
	const headerRef = useRef<HTMLHeadElement>(null);
	const direction = useScrollDirection();

	useEffect(() => {
		const height = headerRef.current?.offsetHeight;
		headerRef.current?.style.setProperty("--header-height", height + "px");
	}, [headerRef.current?.offsetHeight]);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	});

	const onScroll = (e: Event) => {
		const scrollPosition = window.scrollY;

		if (scrollPosition >= 200) {
			setIsActive(true);
			return;
		}

		setIsActive(false);
	};

	return (
		<header
			className={cn(styles.header, styles[direction], {
				[styles.active]: isActive,
			})}
			ref={headerRef}
		>
			<div className={styles.wrapper}>
				<HeaderTop />
				{!isMobile && <HeaderBottom />}
			</div>
		</header>
	);
};

export default Header;
