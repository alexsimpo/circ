'use client';
import { Media } from 'components/media/media';
import { CardItem, CardsSection, Section } from 'types';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Cards: React.FC<CardsSection> = ({
	heading,
	description,
	items,
	...props
}) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className="flex flex-col justify-center py-16 lg:py-32">
					<div className="flex flex-row pb-32">
						<h2 className="w-full flex-1 text-2xl font-medium lg:w-1/4 lg:flex-none">
							{heading}
						</h2>
						<p className="w-full lg:w-1/2">{description}</p>
					</div>
					<Swiper
						spaceBetween={16}
						slidesPerView={2.33}
						className="ml-auto w-3/4"
					>
						{items.map((item, index) => {
							return (
								<SwiperSlide key={index} children={<Card item={item} />} />
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

const Card: React.FC<{ item: CardItem }> = ({ item }) => {
	return (
		<div className="flex h-full flex-col">
			<div className="flex flex-col">
				{(item.image || item.video) && (
					<Media
						ratio="3/2"
						imageSrc={item.image.url}
						alt={item.image.alt}
						fill
					/>
				)}
				<h3 className="pt-4 text-xl font-medium">{item.heading}</h3>
				<p className="pt-4">{item.description}</p>
			</div>
		</div>
	);
};
