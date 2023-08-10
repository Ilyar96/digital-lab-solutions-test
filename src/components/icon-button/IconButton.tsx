import { FC } from "react";
import cn from "classnames";
import { IconButtonProps } from "./IconButton.type";
import styles from "./IconButton.module.scss";

const IconButton: FC<IconButtonProps> = ({
	src,
	ariaLabel = "",
	className,
	...props
}) => {
	return (
		<button className={cn(styles.btn, className)} type="button" {...props}>
			{ariaLabel && <span className="visually-hidden">{ariaLabel}</span>}
			<img
				src={src}
				alt={ariaLabel}
				aria-hidden={ariaLabel ? "true" : "false"}
			/>
		</button>
	);
};

export default IconButton;
