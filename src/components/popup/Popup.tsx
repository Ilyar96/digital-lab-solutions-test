import { FC } from "react";
import cn from "classnames";
import { IconButton, Portal } from "..";
import { PopupProps } from "./Popup.type";
import styles from "./Popup.module.scss";

const Popup: FC<PopupProps> = ({ togglePopup, open, children }) => {
	const changePopupHandler = () => {
		togglePopup();
	};

	return (
		<>
			<Portal>
				<div
					className={cn(styles.popup, {
						[styles.open]: open,
					})}
				>
					<IconButton
						src="/img/close.svg"
						ariaLabel="Close search input"
						className={styles.close}
						onClick={togglePopup}
					/>
					{children}
				</div>
				<button
					className={cn("overlay", { open })}
					onClick={changePopupHandler}
				/>
			</Portal>
		</>
	);
};

export default Popup;
