import { Check } from "lucide-react";
import { ContentContainer } from ".";
import { useProduct } from "../context/ProductContext";

const LearningOutcome = () => {
	const product = useProduct();
	const learningOutcomes = product?.data?.sections[5];

	return (
		<ContentContainer>
			<div className="max-w-screen-md w-full">
				<h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
					{learningOutcomes?.name}
				</h2>

				<div className="border border-black p-6 rounded-md">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{learningOutcomes?.values?.map((item) => (
							<div
								key={item.id}
								className="flex items-start gap-3"
							>
								<Check
									className="text-blue-600 flex-shrink-0 pt-1.5"
									size={24}
								/>
								<p className="text-black leading-relaxed text-sm">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</ContentContainer>
	);
};

export default LearningOutcome;
