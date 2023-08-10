import { Post } from "../../@types/post";

export interface PostPopupProps {
	selectedPost: Post | null;
	open: boolean;
	togglePopup: () => void;
}
