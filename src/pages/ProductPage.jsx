import { useEffect, useState } from "react";
import productAPI from "../services/productAPI";

const ProductPage = () => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			const data = await productAPI.fetchProduct("en");
			setProduct(data);
		};

		loadData();
	}, []);

	if (!product) return <div>Loading...</div>;
	console.log("Product data:", product);

	return (
		<div>
			<h1>{product.data.title}</h1>
			{/* Pass to your components */}
		</div>
	);
};

export default ProductPage;
