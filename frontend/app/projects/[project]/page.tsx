// import { getPage } from '@/utils/serverUtils';
import { SectionBuilder } from 'components/section-builder';
import { Metadata, ResolvingMetadata } from 'next';
import getContent from 'utils/serverUtils/getContent';
import getPageHeader from 'utils/serverUtils/getPageHeader';
import { HeroProject } from 'components/layout/hero-project';
import { ProjectCredits } from 'components/layout/project-credits';

type PageProps = {
	params: { project?: string };
};

export async function generateMetadata(
	{ params }: PageProps,
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

export default async function Page({ params }: PageProps) {
	const slug = params.project;
	const page = await getPageHeader('project', slug);
	const content = await getContent('project', slug);

	return (
		<>
			{page && page.header && (
				<HeroProject
					{...page.header}
					categories={page.categories}
					details={page.details}
				/>
			)}
			{content && <SectionBuilder content={content.pageBuilder} />}
			{page.details?.credits && (
				<ProjectCredits credits={page.details.credits} />
			)}
		</>
	);
}
