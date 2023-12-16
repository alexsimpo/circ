export type Projects = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	name: string;
};

export type Menu = {
	name: string;
	menuItems: ItemLink[];
};

export type Menus = {
	headerMenu: Menu['menuItems'];
	footerMenu: Menu['menuItems'];
	copyrightMenu: Menu['menuItems'];
	socialMenu: Menu['menuItems'];
};

export type ItemLink = {
	label: string;
	url?: string;
	slug?: string;
	reference?: {
		_type: string;
		slug: string;
	};
};

export type LinkReference = {
	_type: string;
	slug: string;
};

export type Media = {
	_type: 'media';
	image?: Image;
	video?: Video;
};

export type Image = {
	id: string;
	alt?: string;
	url: string;
};

export type Video = {
	id: string;
	alt?: string;
	url: string;
};

export type Section = {
	_type:
		| 'cards'
		| 'featured-projects'
		| 'text-block'
		| 'text-cta'
		| 'divider'
		| 'accordion';
	heading?: string;
	description?: string;
	link?: ItemLink;
	width?: 'full' | 'contained';
	display?: Display;
};

export type Display = {
	_type: 'display';
	theme?: 'light' | 'black';
	padding?: 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	columns?: '1' | '2' | '3' | '4' | '5' | '6';
	gutter?: 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export type CardItem = {
	_type: 'cardItem';
	image?: Image;
	video?: Video;
	heading?: string;
	description?: string;
	link?: ItemLink;
	display?: Display;
};

export type AccordionItem = {
	_type: 'item';
	heading?: string;
	description?: string;
};

export type CardsSection = Section & {
	items?: CardItem[];
};

export type TextCtaSection = Section & {
	byline?: string;
};

export type FeaturedProjectsSection = Section & {
	projects?: any[];
	projectClasses?: [];
	hasFilter?: boolean;
};

export type DividerSection = Section & {
	theme?: 'light' | 'black';
};

export type TextBlockSection = Section & {
	text: string;
	content?: string;
};

export type AccordionSection = Section & {
	items: AccordionItem[];
};

export type AllSections =
	| CardsSection
	| TextCtaSection
	| FeaturedProjectsSection
	| DividerSection
	| TextBlockSection
	| AccordionSection;
