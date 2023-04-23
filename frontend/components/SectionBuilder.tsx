import Link from 'next/link';
import { TextCta } from './section/TextCta';
import { FeaturedProjects } from './section/FeaturedProjects';

type ContentProps = {
	content: any[];
};

export const SectionBuilder = ({ content }: ContentProps) => {
	if (!content) return null;
	return content.map((section, index) => {
		switch (section._type) {
			case 'rich-text':
				return <section key={index}>rich text</section>;
			case 'text-cta':
				return <TextCta key={index} section={section} />;
			case 'divider':
				return <section key={index}>divider</section>;
			case 'featured-projects':
				return <FeaturedProjects key={index} section={section} />;
			case 'cards':
				return <section key={index}>cards</section>;
			default:
				return <section key={index}>default</section>;
		}
	});
};
