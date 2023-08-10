import { useContext, useEffect, useState } from "react";
import { Header, PostList } from "..";
import { postService } from "../../services/PostService";
import { Post } from "../../@types/post";
import { FetchingStatus } from "../../@types";
import { SearchContext } from "../../context/SearchContext";
import "./App.scss";

const App = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
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

	return (
		<div className="page">
			<Header />
			<main>
				<PostList data={filteredPosts} status={status} />
			</main>
		</div>
	);
};

export default App;
