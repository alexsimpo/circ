import client from 'sanityClient';
import { Menus } from 'types';

export default async (type: string, slug: string) => {
	const page = await client.fetch(
		`*[_type == $type && slug.current == $slug][0] {
		title,
		'displayTitle': display_title,
		header {
			'image': media.image.asset->{
				alt,
				_id,
				url
			}
		},
		details {
			...
		}
	}`,
		{ type, slug, cache: 'no-store' }
	);

	return page;
};
