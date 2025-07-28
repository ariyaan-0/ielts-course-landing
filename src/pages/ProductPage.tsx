import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import {
	ContentPreview,
	CourseDetails,
	CourseLayout,
	CourseSidebar,
	ExclusiveFeatures,
	FAQ,
	FreeItems,
	Instructor,
	LearningOutcome,
	Payment,
	Requirements,
	StudentsOpinion,
} from "../components";
import { ProductContext } from "../context/ProductContext";
import productAPI from "../services/productAPI";

interface Product {
	data: {
		title: string;
		description: string;
	};
}

const ProductPage: React.FC = () => {
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		const loadData = async () => {
			const data = await productAPI.fetchProduct("en");
			setProduct(data);
		};

		loadData();
	}, []);

	if (!product) return <div>Loading...</div>;

	return (
		<ProductContext.Provider value={product}>
			{/* Full-width background */}
			<div className="absolute top-0 left-0 w-screen h-80 z-[-1] bg-neutral-900" />

			{/* Centered content */}
			<div className="relative flex md:flex-row flex-col-reverse gap-10 items-start justify-center md:px-8 px-4 md:pt-30 pt-20 text-left min-h-[400px] max-w-[1100px] mx-auto">
				{/* Left Column */}
				<div className="max-w-xl z-10">
					{/* Title and Description */}
					<h1 className="text-3xl font-bold text-gray-200">
						{product?.data?.title}
					</h1>
					<div className="text-gray-400 font-semibold pt-5">
						{parse(product?.data?.description)}
					</div>

					{/* All other components */}
					<div className="mt-40">
						<Instructor />
						<CourseLayout />
						<LearningOutcome />
						<ContentPreview />
						<CourseDetails />
						<ExclusiveFeatures />
						<FreeItems />
						<StudentsOpinion />
						<Requirements />
						<Payment />
						<FAQ />
					</div>
				</div>

				{/* Right Column */}
				<div className="w-full md:w-[380px] shrink-0">
					<CourseSidebar />
				</div>
			</div>
		</ProductContext.Provider>
	);
};

export default ProductPage;
