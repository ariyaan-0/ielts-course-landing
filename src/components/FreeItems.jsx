import { ContentContainer } from ".";

const FreeItems = () => {
	return (
		<ContentContainer>
			<h2 className="text-xl font-semibold mb-4">
				Free items with this products–
			</h2>

			<div className="bg-gradient-to-br from-red-600 via-red-500 to-black text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
				<div>
					<h3 className="text-lg font-semibold mb-3">
						ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
					</h3>
					<ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
						<li>৩৬০ পৃষ্ঠা</li>
						<li>প্রিমিয়াম হার্ডকপি</li>
						<li>ফ্রি ডেলিভারি</li>
						<li>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</li>
					</ul>
				</div>
				<img
					src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_1_1.png/"
					alt="IELTS Book"
					className="w-36 md:w-48 object-contain"
				/>
			</div>
		</ContentContainer>
	);
};

export default FreeItems;
