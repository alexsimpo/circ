// import { getPage } from '@/utils/serverUtils';
import { SectionBuilder } from 'components/section-builder';
import { HeroText } from 'components/layout/hero-home';
import { Metadata, ResolvingMetadata } from 'next';
import { getUrlFromStaticProps } from 'utils/pageUtils';
import getContent from 'utils/serverUtils/getContent';
import getProjects from 'utils/serverUtils/getProjects';
import { FeaturedProjects } from 'components/section/projects';

export async function generateMetadata(
	parent: ResolvingMetadata
): Promise<Metadata> {
	// const { meta } = await getPage(params.slug || [], localeKey, searchParams);

	return {
		// title: `${meta.meta_title}`,
		// description: meta.meta_description,
		// openGraph: {
		// 	title: meta.share_title,
		// 	description: meta.share_description,
		// },
	};
}

export default async function Page() {
	const page = await getContent('page', 'projects');
	const projects = await getProjects();

	return (
		<>
			<FeaturedProjects projects={projects} />
		</>
	);
}
