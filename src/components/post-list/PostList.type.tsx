import { FetchingStatus } from "../../@types";
import { Post } from "../../@types/post";

export interface PostListProps {
	data: Post[];
	status: FetchingStatus;
	onClick: (post: Post) => void;
}
