import axios from "axios";

export default class HttpService {
	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_API_URL,
		});
	}
}
