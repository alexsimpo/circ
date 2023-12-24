'use client';

import { Media } from '../media/media';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils/classNameUtils';
import { getSectionalPadding, getTextSize } from '../../utils/sectionUtils';

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

	const { ref: wordRef, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
		delay: 100,
	});

	return (
		<>
			{headingArray.map((word, index) => (
				<div key={index} className="-mb-3 overflow-hidden pb-3">
					<h2
						ref={wordRef}
						className={cn(
							'leading-[0.8] transition-all duration-1000 ease-in-out',
							getTextSize('8xl'),
							inView ? 'translate-y-0 rotate-0' : 'translate-y-full',
							image &&
								'flex items-end gap-x-2 break-words underline decoration-2 underline-offset-4 md:gap-x-4 md:decoration-4 md:underline-offset-8 lg:decoration-[6px]'
						)}
					>
						{image && index === 0 && (
							<Media
								hideTransition
								className="-mb-1 h-8 w-8 md:h-16 md:w-16 lg:h-[5.5rem] lg:w-[5.5rem]"
								ratio="1"
								imageSrc={image.url}
							/>
						)}
						{word}
					</h2>
				</div>
			))}
		</>
	);
};
