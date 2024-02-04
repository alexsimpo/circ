import { nl2br } from 'utils/stringUtils';
import { cn } from '../../utils/classNameUtils';
import { getSectionalPadding, getTextSize } from '../../utils/sectionUtils';

interface HeroProps {
	heading: string;
	description: string;
}

export const HeroContact = ({ heading, description }: HeroProps) => {
	return (
		<section>
			<div className="container">
				<div
					className={cn('flex flex-col gap-8 md:gap-16', getSectionalPadding())}
				>
					<div
						className={cn(
							'grid grid-cols-4 gap-4 lg:gap-8',
							getSectionalPadding('xs')
						)}
					>
						<h1
							className={cn(
								'col-span-4 font-medium md:col-span-2',
								getTextSize('8xl')
							)}
						>
							{heading}
						</h1>
						<p className={cn('col-span-4 md:col-span-2', getTextSize('2xl'))}>
							{nl2br(description)}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
