import { RichText } from '../rich-text';
import { Display, TextBlockSection } from '../../types';
import { cn } from '../../utils/classNameUtils';
import { getSectionalPadding, getTextSize } from '../../utils/sectionUtils';

const defaultDisplay: Partial<Display> = {};

export const TextBlock = ({
	heading,
	content,
	display,
	...rest
}: Partial<TextBlockSection>) => {
	const sectionDisplay = { ...defaultDisplay, ...display };

	return (
		<section className="overflow-hidden">
			<div className="container">
				<div
					className={cn(
						'grid grid-cols-2 gap-4 md:gap-8',
						getSectionalPadding(sectionDisplay.padding)
					)}
				>
					<div className="col-span-2 md:col-span-1">
						<p className={cn('font-medium', getTextSize('2xl'))}>{heading}</p>
					</div>
					<div
						className={cn(
							'portable-text col-span-2 md:col-span-1',
							getTextSize('xl')
						)}
					>
						<RichText value={content} />
					</div>
				</div>
			</div>
		</section>
	);
};
