import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PlayCircle } from "lucide-react";
import { ContentContainer } from ".";
import { useProduct } from "../context/ProductContext";

const StudentsOpinion = () => {
	const product = useProduct();
	const section = product?.data?.sections?.[12];

	if (!section || !section.values || section.values.length === 0) return null;

	const testimonials = section.values.filter(
		(item) => item.thumb && item.video_url
	);

	return (
		<ContentContainer>
			<h2 className="text-xl font-semibold mb-6">Students opinion</h2>

			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1.2}
				breakpoints={{
					768: { slidesPerView: 2.2 },
					1024: { slidesPerView: 3 },
				}}
				navigation
			>
				{testimonials.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="border rounded-sm overflow-hidden shadow-sm bg-white">
							<div className="relative aspect-video">
								<img
									src={item.thumb}
									alt={item.name}
									className="w-full h-full object-cover"
								/>
								<a
									href={`https://www.youtube.com/watch?v=${item.video_url}`}
									target="_blank"
									rel="noopener noreferrer"
									className="absolute inset-0 flex items-center justify-center"
								>
									<PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
								</a>
							</div>
							<div className="p-4">
								<h4 className="font-semibold text-sm">
									{item.name}
								</h4>
								<p className="text-xs text-gray-600 mt-1">
									{item.description}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</ContentContainer>
	);
};

export default StudentsOpinion;
