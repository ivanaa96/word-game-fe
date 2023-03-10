import HttpService from "./HttpService";

class WordService extends HttpService {
	async getPoints(word) {
		try {
			const data = await this.instance.post(`word/points?word=${word}`);
			return data.data;
		} catch (error) {
			return error.response.data;
		}
	}
}

export default new WordService();
