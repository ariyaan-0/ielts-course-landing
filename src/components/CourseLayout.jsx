import { ContentContainer } from ".";
import { useProduct } from "../context/ProductContext";

const CourseLayout = () => {
	const product = useProduct();

	const layout = product?.data?.sections[3];
	const pdf = product?.data?.sections[4].values[0];

	return (
		<ContentContainer>
			<div className="space-y-8 w-full py-8 text-white">
				<h2 className="text-xl font-bold mb-4 text-left text-black">
					{layout.name}
				</h2>

				{/* Dynamic Section - Top Course Items */}
				<div className="bg-[#0D1628] p-6 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
					{layout.values?.map((item) => (
						<div key={item.id} className="flex gap-4 items-start">
							<img
								src={item.icon}
								alt="icon"
								className="w-8 h-8 object-contain"
							/>
							<div>
								<h3 className="font-semibold text-lg">
									{item.title}
								</h3>
								<p className="text-gray-300 text-sm">
									{item.subtitle}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* PDF Download Section */}
				{pdf && (
					<div
						className="rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
						style={{
							backgroundImage: `url(${pdf.background.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="text-white max-w-md">
							<img
								src={pdf.top_left_icon_img}
								alt="icon"
								className="w-40 h-15 mb-2 object-contain"
							/>
							<h3
								className="text-xl font-semibold mt-2"
								style={{ color: pdf.title_color }}
							>
								{pdf.title}
							</h3>
							<p
								className="text-sm mt-2"
								style={{ color: pdf.description_color }}
							>
								{pdf.description}
							</p>
							<a
								href={pdf.cta.clicked_url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<button className="bg-green-500 hover:bg-green-600 text-white mt-4 px-5 py-2 rounded-md font-semibold">
									{pdf.cta.text}
								</button>
							</a>
						</div>
						<div className="w-full md:w-1/3">
							<img
								src={pdf.thumbnail}
								alt="PDF Thumbnail"
								className="w-full rounded-md object-contain"
							/>
						</div>
					</div>
				)}
			</div>
		</ContentContainer>
	);
};

export default CourseLayout;
