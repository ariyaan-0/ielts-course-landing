import React from "react";
import { ContentContainer } from ".";

const Payment: React.FC = () => {
	return (
		<ContentContainer>
			<h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
				Payment process
			</h2>
			<div className="flex flex-col md:flex-row justify-between gap-6 border rounded-md p-6">
				<p>কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে এই ভিডিওটি দেখুন</p>
			</div>
		</ContentContainer>
	);
};

export default Payment;
