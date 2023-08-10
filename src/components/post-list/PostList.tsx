import { FC } from "react";
import { PostListProps } from "./PostList.type";
import { Container, PostCard, Loader } from "..";
import { FetchingStatus } from "../../@types";
import styles from "./PostList.module.scss";

const PostList: FC<PostListProps> = ({ data, status, onClick }) => {
	const isSuccess = status === FetchingStatus.FULFILLED;
	const isError = status === FetchingStatus.FAILURE;
	const isLoading =
		status === FetchingStatus.PENDING || status === FetchingStatus.IDLE;

	return (
		<div className={styles.posts}>
			<Container>
				{isSuccess && (
					<ul className={styles.list}>
						{data.map((post) => (
							<PostCard key={post.title} onClick={onClick} {...post} />
						))}
					</ul>
				)}
				{isError && <div className={styles.empty}>Could not find posts</div>}
				{isLoading && (
					<div className={styles.spinner_wrapper}>
						<Loader />
					</div>
				)}
			</Container>
		</div>
	);
};

export default PostList;
