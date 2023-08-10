import { useEffect, useState } from "react";
import { Header, PostList } from "..";
import { postService } from "../../services/PostService";
import { Post } from "../../@types/post";
import { FetchingStatus } from "../../@types";
import "./App.scss";

const App = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);

	useEffect(() => {
		getPosts();
	}, []);

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
				<PostList data={posts} status={status} />
			</main>
		</div>
	);
};

export default App;
