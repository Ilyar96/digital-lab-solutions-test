import { Post } from "../../@types/post";

export interface PostCardProps extends Post {
	onClick: (post: Post) => void;
}
