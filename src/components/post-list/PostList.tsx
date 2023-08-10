import { FC } from "react";
import { PostListProps } from "./PostList.type";
import { Container, PostCard } from "..";
import { Spinner } from "../Spinner/Spinner";
import { FetchingStatus } from "../../@types";
import styles from "./PostList.module.scss";

const PostList: FC<PostListProps> = ({ data, status }) => {
	const isSuccess = status === FetchingStatus.FULFILLED;
	const isLoading =
		status === FetchingStatus.PENDING || status === FetchingStatus.IDLE;
	const isError = status === FetchingStatus.FAILURE;
	return (
		<div className={styles.posts}>
			<Container>
				{isSuccess && (
					<ul className={styles.list}>
						{data.map((post) => (
							<PostCard key={post.title} {...post} />
						))}
					</ul>
				)}
				{isError && <div className={styles.empty}>Could not find posts</div>}
				{isLoading && (
					<div className={styles.spinner_wrapper}>
						<Spinner />
					</div>
				)}
			</Container>
		</div>
	);
};

export default PostList;
