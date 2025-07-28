import { useProduct } from "../context/ProductContext";

const CourseTitle = () => {
	const product = useProduct();

	if (!product?.data.title) return null;

	return (
		<div className="w-full text-center py-6">
			<h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
				{product.data.title}
			</h1>
		</div>
	);
};

export default CourseTitle;
