import { PortableText, PortableTextComponents } from '@portabletext/react';
import { IconButton } from '../element/Button';
import { getUrlFromLink } from 'utils/pageUtils';
import { RichText } from '../RichText';

type TextCta = {
	section: any;
};

export const TextCta = ({ section }: TextCta) => {
	return (
		<section className="overflow-hidden bg-orange-400">
			<div className="container">
				<div className="flex flex-col justify-between py-16 lg:py-32">
					<div className="portable-text text-3xl font-medium  lg:text-5xl md:w-3/4">
						<RichText value={section.heading} />
					</div>
					<p className="pt-8 md:pt-16 lg:pt-24 md:ml-auto md:w-1/2 lg:w-1/4">
						{section.byline}
					</p>
					{section.link && (
						<div className="pt-4 pb-2 border-b border-black md:pt-8 lg:pt-16 md:ml-auto md:w-1/2 lg:w-1/4">
							<IconButton
								as="a"
								className=""
								children={section.link.label}
								href={getUrlFromLink(section.link)}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
