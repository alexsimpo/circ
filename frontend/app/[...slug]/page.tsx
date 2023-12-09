// import { getPage } from '@/utils/serverUtils';
import { SectionBuilder } from 'components/section-builder';
import { HeroHome } from 'components/layout/hero-home';
import { Metadata, ResolvingMetadata } from 'next';
import { getUrlFromStaticProps } from 'utils/pageUtils';
import getContent from 'utils/serverUtils/getContent';
import getPageHeader from 'utils/serverUtils/getPageHeader';
import { Divider } from 'components/section/divider';
import { HeroDefault } from 'components/layout/hero-default';

type PageProps = {
	params: { slug?: string[] };
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
	const slug = params.slug.join('/');
	const page = await getPageHeader('page', slug);
	const content = await getContent('page', slug);

	return (
		<>
			{page.header && <HeroDefault {...page.header} />}
			<SectionBuilder content={content.pageBuilder} />
		</>
	);
}
