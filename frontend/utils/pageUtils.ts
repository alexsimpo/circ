import { ItemLink, LinkReference } from 'types';

export const getUrlFromLink = (link: ItemLink) => {
	if (link.url) {
		return link.url;
	}
	if (link.reference) {
		return getUrlFromReference(link.reference);
	}
	return '';
};

export const getUrlFromReference = (reference: LinkReference) => {
	if (reference._type === 'page') {
		return `/${reference.slug}`;
	}
	if (reference._type === 'project') {
		return `/projects/${reference.slug}`;
	}
	return '';
};

export const getUrlFromStaticProps = (page: string | string[]) => {
	if (Array.isArray(page)) {
		return page.join('/');
	}
	return page;
};
