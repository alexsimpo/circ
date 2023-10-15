import Link from 'next/link';
import { TextCta } from './section/TextCta';
import { FeaturedProjects } from './section/FeaturedProjects';
import { Divider } from './section/Divider';
import { Cards } from './section/Cards';
import { AllSections } from 'types';

export const SectionBuilder = ({ content }: { content: AllSections[] }) => {
	if (!content) return;
	return content.map((section, index) => {
		switch (section._type) {
			case 'text-block':
				return <section key={index}>rich text</section>;
			case 'text-cta':
				return <TextCta key={index} {...section} />;
			case 'divider':
				return <Divider key={index} {...section} />;
			case 'featured-projects':
				return <FeaturedProjects key={index} {...section} />;
			case 'cards':
				return <Cards key={index} {...section} />;
			default:
				return <section key={index}>default</section>;
		}
	});
};
