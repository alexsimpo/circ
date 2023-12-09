import client from 'sanityClient';

export default async (type: string, slug: string) => {
	const page = await client.fetch(
		`*[_type == $type && slug.current == $slug][0] {
			title,
			header {
				heading,
				description,
				'image': media.image.asset->{
					alt,
					_id,
					url
				},
				heroSection[] {
					...,
					'image': image.asset->{
						alt,
						_id,
						url
					},
				}	
			},
		}`,
		{ type, slug }
	);

	return page;
};
