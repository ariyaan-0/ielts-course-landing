import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { ContentContainer } from ".";
import { useProduct } from "../context/ProductContext";

// Define type for each FAQ item
interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

// Define type for the section
interface Section {
	name: string;
	values: FAQItem[];
}

const FAQ: React.FC = () => {
	const product = useProduct();
	const section: Section | undefined = product?.data?.sections?.[15];

	// openIndex can be number or null
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	if (!section || !section.values || section.values.length === 0) return null;

	const toggle = (idx: number) => {
		setOpenIndex((prev) => (prev === idx ? null : idx));
	};

	return (
		<ContentContainer>
			<h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
				{section.name}
			</h2>

			<div className="border border-gray-300 rounded-md divide-y">
				{section.values.map((item, idx) => (
					<div key={item.id}>
						<button
							onClick={() => toggle(idx)}
							className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-black"
						>
							<span>{item.question}</span>
							{openIndex === idx ? (
								<ChevronUp className="w-5 h-5" />
							) : (
								<ChevronDown className="w-5 h-5" />
							)}
						</button>

						{openIndex === idx && (
							<div
								className="px-6 pb-6 text-gray-800 text-sm leading-relaxed"
								dangerouslySetInnerHTML={{
									__html: item.answer,
								}}
							/>
						)}
					</div>
				))}
			</div>
		</ContentContainer>
	);
};

export default FAQ;
