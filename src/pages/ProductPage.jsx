import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { CourseLayout, CourseSidebar, Instructor } from "../components";
import { ProductContext } from "../context/ProductContext";
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
	// console.log("Product data:", product);

	return (
		<ProductContext.Provider value={product}>
			<div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left  min-h-[400px]">
				{/* Background */}
				<div className="absolute top-0 left-0 w-full h-80 z-[-1] bg-neutral-900" />

				{/* Left column */}
				<div className="max-w-xl z-10 ">
					<div>
						<h1 className="text-3xl font-bold text-gray-200">
							{product?.data?.title}
						</h1>
						<div className="text-gray-400 font-semibold pt-5">
							{parse(product?.data?.description)}
						</div>
					</div>
					<div className="mt-40">
						<Instructor />
						<CourseLayout />
					</div>
				</div>

				{/* Right column */}
				<div className="w-full md:w-[380px] shrink-0">
					<CourseSidebar />
				</div>
			</div>
		</ProductContext.Provider>
	);
};

export default ProductPage;
