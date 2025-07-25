class ProductAPI {
	constructor() {
		this.baseURL =
			"https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";
		this.headers = {
			"X-TENMS-SOURCE-PLATFORM": "web",
			Accept: "application/json",
		};
	}

	async fetchProduct(lang) {
		try {
			if (!lang) {
				throw new Error("The 'lang' parameter is required.");
			}

			const url = `${this.baseURL}?lang=${lang}`;
			const response = await fetch(url, {
				method: "GET",
				headers: this.headers,
			});

			if (!response.ok) {
				throw new Error(`API Error: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Failed to fetch product data:", error);
			return null;
		}
	}
}

const productAPI = new ProductAPI();
export default productAPI;
