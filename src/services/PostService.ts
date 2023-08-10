import axios from "axios";
import { Post } from "../@types/post";

export const postService = {
	async getAll() {
		const { data } = await axios.get<Post[]>(
			"https://cloud.codesupply.co/endpoint/react/data.json"
		);
		return data;
	},
};
