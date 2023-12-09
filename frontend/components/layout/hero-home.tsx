import { Media } from 'components/media/media';
import { cn } from 'utils/classNameUtils';
import { getSectionalPadding, getTextSize } from 'utils/sectionUtils';

interface HeroHomeProps {
	items: {
		heading: string;
		image?: {
			url: string;
			alt: string;
		};
	}[];
}

export const HeroHome = ({ items }: HeroHomeProps) => {
	if (!items) return null;

	return (
		<section>
			<div className="container">
				<div
					className={cn(
						'flex flex-wrap gap-x-2 md:gap-x-4 lg:gap-x-6',
						getSectionalPadding()
					)}
				>
					{items.map((item, index) => (
						<HeadingText
							key={index}
							heading={item.heading}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const HeadingText = ({
	heading,
	image,
}: {
	heading: string;
	image?: { url: string; alt: string };
}) => {
	const headingArray = heading.split(' ');

	return (
		<>
			{headingArray.map((word, index) => (
				<h2
					key={index}
					className={cn(
						getTextSize('8xl'),
						image &&
							'flex items-center gap-x-2 break-words underline decoration-2 underline-offset-4 md:gap-x-4 md:decoration-4 md:underline-offset-8 lg:decoration-[6px]'
					)}
				>
					{image && index === 0 && (
						<Media
							className="h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24"
							ratio="1"
							imageSrc={image.url}
						/>
					)}
					{word}
				</h2>
			))}
		</>
	);
};
