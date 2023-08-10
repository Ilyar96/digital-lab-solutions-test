import { FC } from "react";
import { PostListProps } from "./PostList.type";
import { Container, PostCard } from "..";
import styles from "./PostList.module.scss";

const PostList: FC<PostListProps> = ({ data, status }) => {
	return (
		<div className={styles.posts}>
			<Container>
				<ul className={styles.list}>
					{data.map((post) => (
						<PostCard key={post.title} {...post} />
					))}
				</ul>
			</Container>
		</div>
	);
};

export default PostList;
