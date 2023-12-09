import { getUrlFromLink } from 'utils/pageUtils';
import { Display, TextCtaSection } from 'types';
import Link from 'next/link';
import { RichText } from 'components/rich-text';
import { cn } from 'utils/classNameUtils';
import { getSectionalPadding } from 'utils/sectionUtils';

const defaultDisplay: Partial<Display> = {};

export const TextCta = ({
	heading,
	byline,
	link,
	display,
}: Partial<TextCtaSection>) => {
	const sectionDisplay = { ...defaultDisplay, ...display };
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div
					className={cn(
						'flex flex-col',
						getSectionalPadding(sectionDisplay.padding)
					)}
				>
					<div className="portable-text text-3xl font-medium md:w-3/4 lg:text-5xl">
						<RichText value={heading} />
					</div>
					<div className="pt-8  md:ml-auto md:w-1/2 md:pt-16 lg:w-1/4 lg:pt-24">
						<p className="text-xl">{byline}</p>
						{link && (
							<div className="pt-8 text-2xl font-medium">
								<Link
									as="a"
									className="hover:underline"
									children={link.label}
									href={getUrlFromLink(link)}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
