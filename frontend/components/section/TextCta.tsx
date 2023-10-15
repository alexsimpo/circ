import { getUrlFromLink } from 'utils/pageUtils';
import { RichText } from '../RichText';
import { TextCtaSection } from 'types';
import Link from 'next/link';

export const TextCta: React.FC<TextCtaSection> = ({
	heading,
	byline,
	link,
}) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className="flex flex-col justify-center h-small-screen max-h-screen py-16 lg:py-32">
					<div className="portable-text text-3xl font-medium lg:text-5xl md:w-3/4">
						<RichText value={heading} />
					</div>
					<div className="pt-8  md:pt-16 lg:pt-24 md:ml-auto md:w-1/2 lg:w-1/4">
						<p className="text-xl">{byline}</p>
						{link && (
							<div className="text-2xl pt-8 font-medium">
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
