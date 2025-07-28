import { Check } from "lucide-react";
import React from "react";
import { ContentContainer } from ".";
import { useProduct } from "../context/ProductContext";

interface Feature {
	id: string;
	title: string;
	checklist: string[];
	file_type?: string;
	file_url?: string;
}

interface Section {
	name: string;
	values: Feature[];
}

const ExclusiveFeatures: React.FC = () => {
	const product = useProduct();
	const section: Section | undefined = product?.data?.sections?.[8];

	if (!section) return null;

	return (
		<ContentContainer>
			<h2 className="text-xl font-semibold mb-4">{section.name}</h2>

			<div className="flex flex-col gap-8">
				{section.values.map((feature) => (
					<div
						key={feature.id}
						className="flex flex-col md:flex-row justify-between gap-6 border rounded-md p-6"
					>
						{/* Left: Text + Checklist */}
						<div className="flex-1">
							<h3 className="text-xl font-semibold text-black mb-4">
								{feature.title}
							</h3>
							<ul className="space-y-3">
								{feature.checklist.map((point, idx) => (
									<li
										key={idx}
										className="flex items-start gap-2"
									>
										<Check
											className="text-blue-600 flex-shrink-0 mt-1"
											size={20}
										/>
										<span className="text-gray-800 leading-relaxed">
											{point}
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* Right: Image */}
						{feature.file_type === "image" && feature.file_url && (
							<div className="w-full md:w-40 lg:w-48 flex-shrink-0">
								<img
									src={feature.file_url}
									alt={feature.title}
									className="w-full h-auto object-contain rounded-md"
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</ContentContainer>
	);
};

export default ExclusiveFeatures;
