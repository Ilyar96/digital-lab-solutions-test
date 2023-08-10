import { forwardRef, useState } from "react";
import cn from "classnames";
import { Route } from "../../@types";
import styles from "./Nav.module.scss";

export type ButtonRef<C extends React.ElementType> =
	React.ComponentPropsWithRef<C>["ref"];

const NavItem = forwardRef(
	<C extends React.ElementType>(
		{ href, label, children }: Route,
		ref: ButtonRef<C>
	) => {
		const [isOpen, setIsOpen] = useState(false);
		const isHasChildren = children?.length;

		const onClick = () => {
			setIsOpen((prev) => !prev);
		};

		return (
			<li
				className={cn(
					styles.nav_item,
					{ [styles.with_children]: isHasChildren },
					{ [styles.open]: isOpen }
				)}
			>
				{isHasChildren ? (
					<button
						className={styles.nav_link}
						type="button"
						onClick={onClick}
						ref={ref}
					>
						{label}
					</button>
				) : (
					<a className={styles.nav_link} href={href} ref={ref}>
						{label}
					</a>
				)}

				{children && (
					<ul className={cn(styles.submenu, { [styles.open]: isOpen })}>
						{children?.map((route) => (
							<li className={styles.subitem} key={route.label}>
								<a className={styles.link} href={route.href}>
									<span>{route.label}</span>
								</a>
							</li>
						))}
					</ul>
				)}
			</li>
		);
	}
);

export default NavItem;
