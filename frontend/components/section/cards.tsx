import { Media } from '../media/media';
import { CardItem, CardsSection, Display, Section } from '../../types';
import { cn } from '../../utils/classNameUtils';
import {
	getGridColumnSize,
	getGridColumnSpan,
	getHorizontalGridGutter,
	getSectionalPadding,
	getTextSize,
	getVerticalGridGutter,
} from '../../utils/sectionUtils';

const defaultDisplay: Partial<Display> = { gutter: 'lg' };

export const Cards = ({
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
					<div
						className={cn(
							'grid',
							getHorizontalGridGutter(sectionDisplay.gutter),
							getVerticalGridGutter(sectionDisplay.gutter),
							getGridColumnSize(!useFullGrid ? columns : undefined)
						)}
					>
						{items &&
							items.map((item, index) => {
								const itemFields = { display: sectionDisplay, ...item };
								return <Card key={index} {...itemFields} />;
							})}
					</div>
				</div>
			</div>
		</section>
	);
};

const defaultCardDisplay: Partial<Display> = {};

const Card = ({
	display,
	image,
	video,
	heading,
	description,
	mediaRatio,
	...props
}: Partial<CardItem>) => {
	const itemDisplay = { ...defaultCardDisplay, ...display };

	return (
		<div className={cn('card', getGridColumnSpan(itemDisplay.columns))}>
			<div className="flex flex-col">
				{(image || video) && (
					<Media
						ratio={mediaRatio || '1'}
						className="h-full w-full"
						imageSrc={image?.url}
						alt={image?.alt}
					/>
				)}
				<h3 className={cn('pt-4', getTextSize('2xl'))}>{heading}</h3>
				<p className={cn('pt-2 leading-5', getTextSize('md'))}>{description}</p>
			</div>
		</div>
	);
};
