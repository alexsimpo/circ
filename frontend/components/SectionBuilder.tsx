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
				return <section>rich text</section>;
			case 'text-cta':
				return <TextCta section={section} />;
			case 'divider':
				return <section>divider</section>;
			case 'featured-projects':
				return <section>featured-projects</section>;
			case 'cards':
				return <section>cards</section>;
			default:
				return <section>default</section>;
		}
	});
};
