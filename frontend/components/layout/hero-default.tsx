import { Media } from 'components/media/media';
import { cn } from 'utils/classNameUtils';
import { getSectionalPadding, getTextSize } from 'utils/sectionUtils';

interface HeroProps {
	heading: string;
	description: string;
	image?: {
		url: string;
		alt: string;
	};
	video?: {
		url: string;
		alt: string;
	};
}

export const HeroDefault = ({
	heading,
	description,
	image,
	video,
}: HeroProps) => {
	return (
		<section>
			<div className="container">
				<div
					className={cn('flex flex-col gap-8 md:gap-16', getSectionalPadding())}
				>
					<div
						className={cn(
							'grid grid-cols-4 gap-2 lg:gap-4',
							getTextSize('2xl')
						)}
					>
						<h1 className={cn('col-span-4 font-medium md:col-span-2')}>
							{heading}
						</h1>
						<p className={cn('col-span-4 md:col-span-2')}>{description}</p>
					</div>
					{(image || video) && (
						<Media ratio="2/1" video={video} image={image} />
					)}
				</div>
			</div>
		</section>
	);
};
