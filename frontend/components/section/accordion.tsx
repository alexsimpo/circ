'use client';
import { RichText } from '../rich-text';
import { useEffect, useRef, useState } from 'react';
import { AccordionSection } from '../../types';
import { cn } from '../../utils/classNameUtils';
import { getSectionalPadding, getTextSize } from '../../utils/sectionUtils';

export const Accordion: React.FC<AccordionSection> = ({
	heading,
	description,
	items,
	...props
}) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className={cn('grid grid-cols-4 gap-4', getSectionalPadding())}>
					<h2
						className={cn(
							'col-span-4 font-medium md:col-span-2',
							getTextSize('2xl')
						)}
					>
						{heading}
					</h2>
					<div className="col-span-4 md:col-span-2">
						{items.map((item, index) => {
							return (
								<AccordionItem
									key={index}
									heading={item.heading}
									description={item.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const AccordionItem = ({
	heading,
	description,
	...rest
}: Partial<AccordionSection>) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!contentRef.current) return;
		setContentHeight(contentRef.current.scrollHeight);
	}, []);

	return (
		<div>
			<div
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}
				className={cn(
					'flex cursor-pointer items-center justify-between gap-4 py-3 md:py-4'
				)}
			>
				<h3 className={cn(getTextSize('2xl'))}>{heading}</h3>
				<button
					className={cn(
						'h-5 w-5 rounded-full border border-black',
						isExpanded ? 'bg-black' : 'bg-transparent'
					)}
				/>
			</div>
			{description && (
				<div
					ref={contentRef}
					className={cn('overflow-hidden transition-all', getTextSize('xl'))}
					style={{ height: isExpanded ? contentHeight : 0 }}
				>
					<div className="pb-4 pt-2">
						<RichText value={description} />
					</div>
				</div>
			)}
			<hr className={cn('border-current opacity-60')} />
		</div>
	);
};
