import { useContext, useEffect, useState } from "react";
import { Header, PostList, PostPopup } from "..";
import { postService } from "../../services/PostService";
import { Post } from "../../@types/post";
import { FetchingStatus } from "../../@types";
import { SearchContext } from "../../context/SearchContext";
import styles from "./App.module.scss";

const App = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);
	const { searchValue } = useContext(SearchContext);

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		const filteredPosts = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				post.text.toLowerCase().includes(searchValue.toLowerCase())
		);

		setFilteredPosts(filteredPosts);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [posts, searchValue]);

	const getPosts = async () => {
		try {
			setStatus(FetchingStatus.PENDING);
			const data = await postService.getAll();
			setPosts(data);
			setStatus(FetchingStatus.FULFILLED);
		} catch (error) {
			setStatus(FetchingStatus.FAILURE);
			console.error((error as Error).message);
		}
	};

	const togglePopup = () => {
		setIsOpen((prev) => !prev);
	};

	const onClickPostCard = (post: Post) => {
		togglePopup();
		setSelectedPost(post);
	};

	return (
		<div className={styles.page}>
			<Header />
			<main>
				<PostList
					data={filteredPosts}
					status={status}
					onClick={onClickPostCard}
				/>
				<PostPopup
					open={isOpen}
					selectedPost={selectedPost}
					togglePopup={togglePopup}
				/>
			</main>
		</div>
	);
};

export default App;
