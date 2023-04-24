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
				"image": Header.media.image.asset->url
			},
			"items": items[] {
				heading,
				description,
				link {label, url, reference->{_type, 'slug': slug.current}},
				media {
					"image": image.asset->url,
					"video": video.asset->url
				}
			}
		},
	}`,
		{ type, slug }
	);

	return content;
};
