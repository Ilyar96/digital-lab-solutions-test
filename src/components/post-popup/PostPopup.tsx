import React, { FC } from "react";
import { PostPopupProps } from "./PostPopup.type";
import { Popup } from "..";

const PostPopup: FC<PostPopupProps> = ({ open, selectedPost, togglePopup }) => {
	return (
		<Popup open={open} togglePopup={togglePopup}>
			<article>
				<h4>{selectedPost?.title}</h4>
				<p>{selectedPost?.text}</p>
			</article>
		</Popup>
	);
};

export default PostPopup;
