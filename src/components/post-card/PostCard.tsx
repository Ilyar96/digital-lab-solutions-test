import { FC, memo } from "react";
import { PostCardProps } from "./PostCard.type";
import styles from "./PostCard.module.scss";

const PostCard: FC<PostCardProps> = ({
	autor,
	date,
	img,
	img_2x,
	tags,
	text,
	title,
	views,
}) => {
	return (
		<li className={styles.post}>
			<figure className={styles.img_wrapper}>
				<img
					className={styles.img}
					src={img}
					srcSet={`${img_2x} 2x`}
					alt={title}
				/>
			</figure>
			<div className={styles.tag}>{tags}</div>
			<h3 className={styles.title}>
				<a href="/">{title}</a>
			</h3>
			<div className={styles.info}>
				<span className={styles.author}>{autor}</span>
				<span>{date}</span>
				<span>{views}</span>
			</div>
			<div className={styles.description}>{text}</div>
		</li>
	);
};

export default memo(PostCard);