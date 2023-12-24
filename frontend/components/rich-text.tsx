import { PortableText, PortableTextComponents } from '@portabletext/react';

type RichText = {
	value: any;
};

export const RichText = ({ value }: RichText) => {
	const components: PortableTextComponents = {
		marks: {
			// Ex. 1: custom renderer for the em / italics decorator
			underline: ({ children }) => (
				<span className="underline decoration-from-font underline-offset-[0.15em]">
					{children}
				</span>
			),

			// Ex. 2: rendering a custom `link` annotation
			link: ({ value, children }) => {
				const target = (value?.href || '').startsWith('http')
					? '_blank'
					: undefined;
				return (
					<a
						href={value?.href}
						target={target}
						rel={target === '_blank' ? 'noindex nofollow' : ''}
					>
						{children}
					</a>
				);
			},
		},
	};

	return <PortableText value={value} components={components} />;
};
