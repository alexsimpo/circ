import { Media } from 'components/media/media';
import { cn } from 'utils/classNameUtils';
import { getSectionalPadding, getTextSize } from 'utils/sectionUtils';

interface HeroProps {
	heading: string;
	categories: {
		title: string;
		color?: string;
	}[];
	details: {
		year: string;
		location: string;
		description: string;
		credits: {
			role: string;
			name: string;
		}[];
	};
	image?: {
		url: string;
		alt: string;
	};
	video?: {
		url: string;
		alt: string;
	};
}

export const HeroProject = ({
	heading,
	categories,
	image,
	details,
	video,
}: HeroProps) => {
	return (
		<section>
			<div className="relative h-half-screen min-h-128">
				{(image || video) && <Media video={video} image={image} fill />}
			</div>
			<div className="container">
				<div
					className={cn(
						'grid grid-cols-4 gap-4 lg:gap-8',
						getSectionalPadding('xs')
					)}
				>
					<h1
						className={cn(
							'col-span-4 font-medium md:col-span-3',
							getTextSize('8xl')
						)}
					>
						{heading}
					</h1>
					<div className="col-span-4 flex flex-col gap-1 pt-4 md:col-span-1">
						{categories &&
							categories.map((category, index) => (
								<div
									key={index}
									className={cn('flex items-center gap-3', getTextSize('2xl'))}
								>
									<div
										style={{ background: category.color.value }}
										className="h-5 w-5 rounded-full"
									/>
									{category.title}
								</div>
							))}
					</div>
				</div>

				<div
					className={cn(
						'grid grid-cols-4 gap-4 lg:gap-8',
						getTextSize('2xl'),
						getSectionalPadding('lg')
					)}
				>
					<div className={cn('col-span-2 flex flex-col md:col-span-1')}>
						<h3 className="font-medium">Year</h3>
						<p>{details.year}</p>
					</div>
					<div className={cn('col-span-2 flex flex-col md:col-span-1')}>
						<h3 className="font-medium">Location</h3>
						<p>{details.location}</p>
					</div>
					<div className="col-span-4 flex flex-col gap-4 md:col-span-2">
						<h3 className="font-medium">About</h3>
						<p className={cn(getTextSize('xl'))}>{details.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
