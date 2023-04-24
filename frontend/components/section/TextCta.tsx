import { IconButton } from '../element/Button';
import { getUrlFromLink } from 'utils/pageUtils';
import { RichText } from '../RichText';
import { TextCtaSection } from 'types';

export const TextCta: React.FC<TextCtaSection> = ({
	heading,
	byline,
	link,
}) => {
	return (
		<section className="overflow-hidden bg-orange-400">
			<div className="container">
				<div className="flex flex-col justify-center py-16 lg:py-32">
					<div className="portable-text text-3xl font-medium lg:text-5xl md:w-3/4">
						<RichText value={heading} />
					</div>
					<div>
						<p className="pt-8 md:pt-16 lg:pt-24 md:ml-auto md:w-1/2 lg:w-1/4">
							{byline}
						</p>
						{link && (
							<div className="pt-4 pb-2 border-b border-black md:pt-8 lg:pt-16 md:ml-auto md:w-1/2 lg:w-1/4">
								<IconButton
									as="a"
									className=""
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
