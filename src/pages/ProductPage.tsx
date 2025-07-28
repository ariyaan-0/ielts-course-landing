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
			{/* Main Section with Background and Content */}
			<div className="relative w-full">
				{/* Background */}
				<div className="absolute top-0 left-0 w-full h-80 bg-neutral-900 z-[-1]" />

				{/* Content */}
				<div
					className="
						relative flex md:flex-row flex-col-reverse gap-10 items-start justify-center
						md:px-8 px-4
						pt-20
						text-left
						min-h-[400px]
						max-w-[1280px] mx-auto
					"
				>
					{/* Left Column */}
					<div className="w-full md:w-[760px] z-10">
						<div>
							<h1 className="text-3xl font-bold text-gray-200">
								{product?.data?.title}
							</h1>
							<div className="text-white pt-3">
								(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
							</div>
							<div className="text-gray-400 font-semibold pt-5">
								{parse(product?.data?.description)}
							</div>
						</div>

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
					<div className="w-full md:w-[400px] shrink-0 sticky top-0 self-start">
						<CourseSidebar />
					</div>
				</div>
			</div>
		</ProductContext.Provider>
	);
};

export default ProductPage;
