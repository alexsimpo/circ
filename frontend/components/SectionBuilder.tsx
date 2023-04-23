import Link from 'next/link';
import { TextCta } from './TextCta';

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
				return <section key={index}>featured-projects</section>;
			case 'cards':
				return <section key={index}>cards</section>;
			default:
				return <section key={index}>default</section>;
		}
	});
};
