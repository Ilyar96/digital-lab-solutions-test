import { forwardRef } from "react";
import { IconButton, Logo, Nav, Portal } from "../";
import styles from "./MobileMenu.module.scss";
import { withClickOutside } from "../../hoc/withClickOutside";
import { IWrappedComponentProps } from "../../@types";
import cn from "classnames";

const MobileMenu = forwardRef<HTMLDivElement, IWrappedComponentProps>(
	({ open, setOpen }, ref) => {
		const onOpen = () => {
			setOpen(true);
			document.body.classList.add("lock");
		};

		const onClose = () => {
			setOpen(false);
			document.body.classList.remove("lock");
		};

		return (
			<>
				<IconButton
					src="/img/burger.svg"
					ariaLabel="Open menu"
					className={styles.burger}
					onClick={onOpen}
				/>
				<Portal>
					<div
						className={cn(styles.menu, {
							[styles.open]: open,
						})}
						ref={ref}
					>
						<div className={styles.header}>
							<Logo className={styles.logo} />
							<IconButton
								src="/img/close.svg"
								ariaLabel="Close menu"
								className={styles.close}
								onClick={onClose}
							/>
						</div>

						<Nav className={styles.nav} isOpen={open} />
					</div>
					<button className={cn("overlay", { open })} onClick={onClose} />
				</Portal>
			</>
		);
	}
);

export default withClickOutside(MobileMenu);
