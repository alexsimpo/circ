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
	menuItems: MenuLink[];
};

export type MenuLink = {
	label: string;
	url?: string;
	link?: {
		_type: string;
		slug: string;
	};
};
