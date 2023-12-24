export type Projects = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type?: string;
	_updatedAt: string;
	name: string;
};

export type Project = {
	_createdAt?: string;
	_id?: string;
	_rev?: string;
	_type?: string;
	_updatedAt?: string;
	name?: string;
	title?: string;
	slug?: string;
	description?: string;
	image?: Image;
	video?: Video;
	className?: string;
	categories?: {
		title: string;
		color?: {
			value: string;
		};
	}[];
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
		_type?: string;
		slug: string;
	};
};

export type LinkReference = {
	_type?: string;
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
		| 'accordion'
		| 'awards';
	heading?: string;
	description?: string;
	link?: ItemLink;
	width?: 'full' | 'contained';
	display?: Display;
};

export type Display = {
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
	mediaRatio?:
		| '3/2'
		| '5/4'
		| '16/9'
		| '1'
		| '4/3'
		| '3/4'
		| '9/16'
		| '4/5'
		| '2/3'
		| '2/1'
		| '3/1';
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
