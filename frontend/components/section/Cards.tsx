import { Media } from 'components/media/Media';
import { CardItem, CardsSection, Section } from 'types';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const Cards: React.FC<CardsSection> = ({
	heading,
	description,
	items,
	...props
}) => {
	const swiperElRef = useRef(null);

	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener('progress', (e) => {
			const [swiper, progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener('slidechange', (e) => {
			console.log('slide changed');
		});
	}, []);

	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className="flex flex-col justify-center py-16 lg:py-32">
					<div className="flex flex-row pb-32">
						<h2 className="text-2xl font-medium flex-1 w-full lg:w-1/4 lg:flex-none">
							{heading}
						</h2>
						<p className="w-full lg:w-1/2">{description}</p>
					</div>
					<swiper-container ref={swiperElRef} class="gap-4 max-w-full lg:gap-6">
						{items.map((item, index) => {
							return <Card key={index} item={item} />;
						})}
					</swiper-container>
				</div>
			</div>
		</section>
	);
};

const Card: React.FC<{ item: CardItem }> = ({ item }) => {
	return (
		<swiper-slide class="w-1/4">
			<div className="flex flex-col h-full">
				<div className="flex flex-col">
					{item.media && (
						<Media
							ratio="3/2"
							imageSrc={item.media.image}
							alt={item.media.alt}
							className="rounded-3xl"
						/>
					)}
					<h3 className="text-xl font-medium pt-4">{item.heading}</h3>
					<p className="pt-4">{item.description}</p>
				</div>
			</div>
		</swiper-slide>
	);
};
