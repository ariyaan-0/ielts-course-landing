import { Check } from "lucide-react";
import React from "react";
import { ContentContainer } from ".";

const Requirements: React.FC = () => {
	return (
		<ContentContainer>
			<h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
				Requirements
			</h2>
			<div className="flex flex-col md:flex-row justify-between gap-6 border rounded-md p-6">
				<ul className="space-y-3">
					<li className="flex items-start gap-2">
						<Check
							className="text-blue-600 flex-shrink-0 mt-1"
							size={20}
						/>
						<span className="text-gray-800 leading-relaxed">
							ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)
						</span>
					</li>

					<li className="flex items-start gap-2">
						<Check
							className="text-blue-600 flex-shrink-0 mt-1"
							size={20}
						/>
						<span className="text-gray-800 leading-relaxed">
							স্মার্টফোন অথবা পিসি
						</span>
					</li>
				</ul>
			</div>
		</ContentContainer>
	);
};

export default Requirements;
