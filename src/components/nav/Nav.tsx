import { FC, useEffect, useRef } from "react";
import cn from "classnames";
import { routeList } from "../../constants";
import NavItem from "./NavItem";
import { NavProps } from "./Nav.type";
import styles from "./Nav.module.scss";

const Nav: FC<NavProps> = ({ className = "", isOpen = false }) => {
	const firstLinkRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

	useEffect(() => {
		firstLinkRef.current?.focus();
	}, [isOpen]);

	return (
		<nav className={cn(styles.nav, className)}>
			<ul className={styles.nav_list}>
				{routeList.map(({ href, label, children }, i) => (
					<NavItem
						href={href}
						label={label}
						children={children}
						key={label}
						ref={i === 0 ? firstLinkRef : null}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
