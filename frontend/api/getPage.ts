import client from 'sanityClient';
import { Menus } from 'types';

export default async (type: string, slug: string) => {
	const page = await client.fetch(
		`*[_type == $type && slug.current == $slug][0] {
		header {
			title,
			description,
			'image': media.image.asset->{
				alt,
				_id,
				url
			}
		},
	}`,
		{ type, slug }
	);

	return page;
};
