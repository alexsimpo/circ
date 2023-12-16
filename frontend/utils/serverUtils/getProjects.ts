import client from 'sanityClient';

export default async () => {
	const projects = await client.fetch(
		`*[_type == 'project'] {
			title,
			'slug': slug.current,
			'description': subtitle,
			categories[]->{
				title,
				color
			},
			details {
				...,
				credits[] {
					role,
					name,
				}
			},
			'image': header.media.image.asset->{
				alt,
				_id,
				url
			},
			'video': header.media.video.asset->{
				alt,
				_id,
				url
			},
		}`
	);

	return projects;
};
