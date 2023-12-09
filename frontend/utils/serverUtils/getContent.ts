import client from 'sanityClient';

export default async (type: string, slug: string) => {
	const content = await client.fetch(
		`*[_type == $type && slug.current == $slug][0] {
		pageBuilder[] {
			_type,
			...,
			link {label, url, reference->{_type, 'slug': slug.current}},
			"projects": projects[]->{
				title,
				'slug': slug.current,
				'description': subtitle,
				'image': header.media.image.asset->{
					alt,
					_id,
					url
				},
				'video': header.media.video.asset->{
					alt,
					_id,
					url
				}
			},
			"items": items[] {
				heading,
				description,
				link {label, url, reference->{_type, 'slug': slug.current}},
				'image': media.image.asset->{
					alt,
					_id,
					url
				},
				'video': media.video.asset->{
					alt,
					_id,
					url
				}
			},
		},
	}`,
		{ type, slug }
	);

	return content;
};
