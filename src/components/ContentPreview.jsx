import {
	BookOpen,
	ChevronDown,
	ChevronUp,
	Lock,
	PlayCircle,
} from "lucide-react";
import { useState } from "react";
import { ContentContainer } from ".";

const sampleContent = [
	{
		title: "Introduction",
		items: [
			{ type: "video", title: "IELTS: Introduction", free: true },
			{ type: "video", title: "IELTS: Overview", free: true },
			{ type: "video", title: "How to Prepare for IELTS?", free: true },
			{ type: "video", title: "Making a Daily Routine", free: true },
			{
				type: "video",
				title: "Different Sentence Structures to Improve Writing",
				free: false,
			},
			{ type: "text", title: "IELTS General Facts", free: false },
			{ type: "text", title: "IELTS Vocabulary", free: false },
		],
	},
	{
		title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
		items: [
			{ type: "video", title: "IELTS: Introduction", free: true },
			{ type: "video", title: "IELTS: Overview", free: true },
			{ type: "video", title: "How to Prepare for IELTS?", free: true },
			{ type: "video", title: "Making a Daily Routine", free: true },
			{
				type: "video",
				title: "Different Sentence Structures to Improve Writing",
				free: false,
			},
			{ type: "text", title: "IELTS General Facts", free: false },
			{ type: "text", title: "IELTS Vocabulary", free: false },
		],
	},
	{
		title: "Academic Reading",
		items: [
			{ type: "video", title: "IELTS: Introduction", free: true },
			{ type: "video", title: "IELTS: Overview", free: true },
			{ type: "video", title: "How to Prepare for IELTS?", free: true },
			{ type: "video", title: "Making a Daily Routine", free: true },
			{
				type: "video",
				title: "Different Sentence Structures to Improve Writing",
				free: false,
			},
			{ type: "text", title: "IELTS General Facts", free: false },
			{ type: "text", title: "IELTS Vocabulary", free: false },
		],
	},
	{
		title: "Academic Reading Mock Test",
		items: [
			{ type: "video", title: "IELTS: Introduction", free: true },
			{ type: "video", title: "IELTS: Overview", free: true },
			{ type: "video", title: "How to Prepare for IELTS?", free: true },
			{ type: "video", title: "Making a Daily Routine", free: true },
			{
				type: "video",
				title: "Different Sentence Structures to Improve Writing",
				free: false,
			},
			{ type: "text", title: "IELTS General Facts", free: false },
			{ type: "text", title: "IELTS Vocabulary", free: false },
		],
	},
	{
		title: "Listening",
		items: [
			{ type: "video", title: "IELTS: Introduction", free: true },
			{ type: "video", title: "IELTS: Overview", free: true },
			{ type: "video", title: "How to Prepare for IELTS?", free: true },
			{ type: "video", title: "Making a Daily Routine", free: true },
			{
				type: "video",
				title: "Different Sentence Structures to Improve Writing",
				free: false,
			},
			{ type: "text", title: "IELTS General Facts", free: false },
			{ type: "text", title: "IELTS Vocabulary", free: false },
		],
	},
];

const ContentPreview = () => {
	const [openSections, setOpenSections] = useState({ 0: true });

	const toggleSection = (idx) => {
		setOpenSections((prev) => ({ ...prev, [idx]: !prev[idx] }));
	};

	return (
		<ContentContainer>
			<h2 className="text-xl font-semibold mb-4">Content preview</h2>
			<div className="border border-black p-6 rounded-md">
				{sampleContent.map((section, idx) => (
					<div key={idx} className="border-b last:border-b-0">
						<button
							onClick={() => toggleSection(idx)}
							className="w-full text-left flex justify-between items-center py-3 font-medium"
						>
							<span>{section.title}</span>
							{openSections[idx] ? (
								<ChevronUp className="w-5 h-5" />
							) : (
								<ChevronDown className="w-5 h-5" />
							)}
						</button>

						{openSections[idx] && section.items.length > 0 && (
							<ul className="space-y-3 pb-4 pl-1">
								{section.items.map((item, i) => (
									<li
										key={i}
										className="flex justify-between items-start"
									>
										<div className="flex items-start gap-2">
											{item.type === "video" ? (
												item.free ? (
													<PlayCircle className="w-5 h-5 text-green-500 mt-1" />
												) : (
													<PlayCircle className="w-5 h-5 text-gray-400 mt-1" />
												)
											) : (
												<BookOpen className="w-5 h-5 text-gray-500 mt-1" />
											)}
											<p
												className={`${
													item.free
														? "text-black"
														: "text-gray-500"
												} text-sm`}
											>
												{item.type === "video"
													? "Video: "
													: ""}
												{item.title}
											</p>
										</div>

										{item.free ? (
											<span className="text-green-600 text-sm">
												ফ্রি দেখুন
											</span>
										) : (
											<Lock className="w-4 h-4 text-gray-400 mt-1" />
										)}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
				<div className="mt-6 text-center">
					<button className="border border-gray-300 rounded-full px-6 py-2 text-sm text-gray-800 hover:bg-gray-100 transition">
						সকল কনটেন্ট{" "}
						<ChevronDown className="inline-block w-4 h-4 ml-1" />
					</button>
				</div>
			</div>
		</ContentContainer>
	);
};

export default ContentPreview;
