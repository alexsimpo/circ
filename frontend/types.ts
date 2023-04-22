export type Projects = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	name: string;
};

export type Menus = {
	headerMenu: Menu['menuItems'];
	footerMenu: Menu['menuItems'];
	copyrightMenu: Menu['menuItems'];
	socialMenu: Menu['menuItems'];
};

export type Menu = {
	name: string;
	menuItems: ItemLink[];
};

export type ItemLink = {
	label: string;
	url?: string;
	reference?: {
		_type: string;
		slug: string;
	};
};

export type LinkReference = {
	_type: string;
	slug: string;
};
