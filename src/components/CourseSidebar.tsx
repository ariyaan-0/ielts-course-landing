import { useState } from "react";
import { useProduct } from "../context/ProductContext";

type MediaItem = {
	resource_type: "video" | "image";
	resource_value: string;
	thumbnail_url?: string;
};

type ChecklistItem = {
	id: string;
	icon: string;
	text: string;
};

const CourseSidebar = (): JSX.Element | null => {
	const product = useProduct();

	const media: MediaItem[] = product?.data?.media || [];
	const checklist: ChecklistItem[] = product?.data?.checklist || [];
	const ctaText: string = product?.data?.cta_text?.value || "Enroll";

	const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(
		media[0] || null
	);

	if (!selectedMedia) return null;

	return (
		<div className="w-full bg-white p-1 border shadow-sm">
			{/* Media Preview */}
			<div className="w-full aspect-video overflow-hidden mb-4">
				{selectedMedia.resource_type === "video" ? (
					<iframe
						src={`https://www.youtube.com/embed/${selectedMedia.resource_value}`}
						title="Course Trailer"
						className="w-full h-full"
						allowFullScreen
					></iframe>
				) : (
					<img
						src={selectedMedia.resource_value}
						alt="Preview"
						className="w-full h-full object-cover"
					/>
				)}
			</div>

			{/* Thumbnail Slider */}
			<div className="flex gap-1 overflow-x-auto mb-4">
				{media.map((item, index) => (
					<div
						key={index}
						className={`w-20 h-14 cursor-pointer border overflow-hidden ${
							item.resource_value === selectedMedia.resource_value
								? "ring-2 ring-blue-500"
								: ""
						}`}
						onClick={() => setSelectedMedia(item)}
					>
						<img
							src={item.thumbnail_url || item.resource_value}
							alt={`thumb-${index}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>

			{/* Price & CTA */}
			<div className="text-left space-y-2 mb-4">
				<div className="flex items-center gap-3 pl-4 pb-4 pt-4">
					<p className="text-2xl font-bold text-gray-800">৳1000</p>
				</div>
				<div className="pl-4 pr-4">
					<button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md">
						{ctaText}
					</button>
				</div>
			</div>

			{/* Checklist */}
			<div className="pl-5 pb-5 pt-5">
				<h3 className="text-lg font-semibold text-black mb-2">
					এই কোর্সে যা থাকছে
				</h3>
				<ul className="space-y-2 text-black text-l">
					{checklist.map((item) => (
						<li key={item.id} className="flex items-start gap-4">
							<img
								src={item.icon}
								alt="icon"
								className="w-5 h-5 mt-0.5"
							/>
							<span>{item.text}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CourseSidebar;
