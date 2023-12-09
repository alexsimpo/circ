import Link from 'next/link';
import { TextCta } from './section/text-cta';
import { FeaturedProjects } from './section/projects';
import { Divider } from './section/divider';
import { Cards } from './section/cards';
import { AllSections } from 'types';
import { Accordion } from './section/accordion';
import { Awards } from './section/awards';

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
			case 'accordion':
				return <Accordion key={index} {...section} />;
			case 'awards':
				return <Awards key={index} {...section} />;
			default:
				return <section key={index}>default</section>;
		}
	});
};
