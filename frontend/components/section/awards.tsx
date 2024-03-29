import { CardItem, CardsSection, Display } from '../../types';
import { cn } from '../../utils/classNameUtils';
import { getSectionalPadding, getTextSize } from '../../utils/sectionUtils';
import { nl2br } from '../../utils/stringUtils';

const defaultDisplay: Partial<Display> = { gutter: 'lg' };

export const Awards = ({
	heading,
	description,
	items,
	display,
	...props
}: Partial<CardsSection>) => {
	const sectionDisplay = { ...defaultDisplay, ...display };
	const useFullGrid = sectionDisplay.columns ? true : false;
	const columns = sectionDisplay.columns || items?.length;

	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className={cn(getSectionalPadding(sectionDisplay.padding))}>
					{heading && (
						<h2 className={cn('pb-8 font-medium md:pb-16', getTextSize('2xl'))}>
							{heading}
						</h2>
					)}
					<div className={cn()}>
						{items &&
							items.map((item, index) => {
								const itemFields = { ...sectionDisplay, ...item };
								return <Award key={index} {...itemFields} />;
							})}
					</div>
				</div>
			</div>
		</section>
	);
};

const defaultCardDisplay: Partial<Display> = {};

const Award = ({
	display,
	image,
	video,
	heading,
	description,
	...props
}: Partial<CardItem>) => {
	const itemDisplay = { ...defaultCardDisplay, ...display };

	return (
		<div className="flex flex-col justify-between gap-4 border-b border-black py-6 last:border-b-0 md:flex-row">
			<h3 className={cn('font-medium', getTextSize('2xl'))}>{heading}</h3>
			{description && (
				<p className={cn('leading-10 md:text-right', getTextSize('2xl'))}>
					{nl2br(description)}
				</p>
			)}
		</div>
	);
};
