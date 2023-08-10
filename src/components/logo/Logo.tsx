import { FC } from "react";
import cn from "classnames";
import { LogoProps } from "./Logo.type";
import styles from "./Logo.module.scss";

const Logo: FC<LogoProps> = ({ className = "" }) => {
	return (
		<div className={cn(styles.logo, className)}>
			<img src="/img/logo.svg " alt="Logotype" />
		</div>
	);
};

export default Logo;
