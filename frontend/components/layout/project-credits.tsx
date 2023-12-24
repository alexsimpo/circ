import { getSectionalPadding, getTextSize } from 'utils/sectionUtils';
import { nl2br } from '../../utils/stringUtils';
import { cn } from '../../utils/classNameUtils';

export const ProjectCredits = ({
	credits,
}: {
	credits: {
		role: string;
		name: string;
	}[];
}) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div
					className={cn(
						'grid grid-cols-2 gap-2 md:gap-4',
						getSectionalPadding()
					)}
				>
					<hr className="col-span-2 border-black" />
					<h2
						className={cn(
							'col-span-2 pb-6 font-medium md:col-span-1 md:pb-0',
							getTextSize('2xl')
						)}
					>
						Credits
					</h2>
					<div className={cn('col-span-2 md:col-span-1')}>
						{credits.map((item, index) => {
							return <Credit key={index} {...item} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const Credit = ({ role, name }: { role: string; name: string }) => {
	return (
		<div className="flex justify-between gap-4 border-b border-black py-4 first:pt-0 last:border-b-0">
			<h3 className={cn('font-medium', getTextSize('2xl'))}>{role}</h3>
			<p className={cn('text-right leading-8', getTextSize('2xl'))}>
				{nl2br(name)}
			</p>
		</div>
	);
};
