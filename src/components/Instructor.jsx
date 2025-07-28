import parse from "html-react-parser";
import { useProduct } from "../context/ProductContext";
import { ContentContainer } from "./index";
const Instructors = () => {
	const product = useProduct();
	const instructorData = product?.data?.sections[2];

	if (!instructorData || !instructorData.values?.length) return null;

	const instructor = instructorData.values;

	return (
		<ContentContainer>
			<h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
				{instructorData.name}
			</h2>
			{instructor.map((value) => (
				<div
					className="border rounded-md p-4 pb-0 flex items-start gap-4 bg-white"
					key={value.slug}
				>
					<img
						src={value.image}
						alt={value.name}
						className="w-16 h-16 rounded-full object-cover"
					/>
					<div className="text-left">
						<h3 className="font-semibold text-lg text-gray-900 flex items-center gap-1">
							{value.name}
							<span className="text-gray-500 text-sm">›</span>
						</h3>
						<div className="text-sm text-gray-700 whitespace-pre-line mt-1">
							{parse(value.description)}
						</div>
					</div>
				</div>
			))}
		</ContentContainer>
	);
};

export default Instructors;
