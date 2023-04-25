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
	image?: string;
	video?: string;
	alt?: string;
};

export type Section = {
	_type: 'cards' | 'featured-projects' | 'text-block' | 'text-cta' | 'divider';
	heading?: string;
	description?: string;
	link?: ItemLink;
};

export type CardItem = {
	_type: 'cardItem';
	media?: Media;
	heading?: string;
	description?: string;
	link?: ItemLink;
};

export type CardsSection = Section & {
	items?: CardItem[];
};

export type TextCtaSection = Section & {
	byline?: string;
};

export type FeaturedProjectsSection = Section & {
	projects?: any[];
};

export type DividerSection = Section & {
	theme?: 'light' | 'dark';
};

export type TextBlockSection = Section & {
	text: string;
};

export type AllSections =
	| CardsSection
	| TextCtaSection
	| FeaturedProjectsSection
	| DividerSection
	| TextBlockSection;
