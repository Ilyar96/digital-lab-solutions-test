import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Logo, IconButton, Container, MobileMenu } from "../";
import { mobileMediaQuery } from "../../constants";
import { useMedia } from "../../hooks";
import styles from "./Header.module.scss";
import { SearchContext } from "../../context/SearchContext";

const HeaderTop = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useMedia(mobileMediaQuery);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const { searchValue, changeSearchValue } = useContext(SearchContext);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const timer = setTimeout(function () {
			searchInputRef.current?.focus();
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [isOpen]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		changeSearchValue(e.target.value);
	};

	const onOpen = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		changeSearchValue("");
		setIsOpen(false);
	};

	return (
		<Container>
			<div className={cn(styles.header_top, { [styles.open]: isOpen })}>
				{isMobile && <MobileMenu />}
				<Logo className={styles.logo} />
				<input
					type="text"
					className={cn(styles.input, {
						[styles.open]: isOpen,
					})}
					placeholder="Search..."
					ref={searchInputRef}
					value={searchValue}
					onChange={onChange}
				/>
				{isOpen ? (
					<IconButton
						src="/img/close.svg"
						ariaLabel="Close search input"
						className={styles.search_btn}
						onClick={onClose}
					/>
				) : (
					<IconButton
						src="/img/search.svg"
						ariaLabel="Open search input"
						className={styles.search_btn}
						onClick={onOpen}
					/>
				)}
			</div>
		</Container>
	);
};

export default HeaderTop;
