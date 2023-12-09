// import { getPage } from '@/utils/serverUtils';
import { SectionBuilder } from 'components/section-builder';
import { HeroHome } from 'components/layout/hero-home';
import { Metadata, ResolvingMetadata } from 'next';
import { getUrlFromStaticProps } from 'utils/pageUtils';
import getContent from 'utils/serverUtils/getContent';
import getPageHeader from 'utils/serverUtils/getPageHeader';
import { Divider } from 'components/section/divider';

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

export default async function Page() {
	const page = await getPageHeader('page', 'home');
	const content = await getContent('page', 'home');

	return (
		<>
			<HeroHome items={page.header.heroSection} />
			<Divider theme="black" />
			<SectionBuilder content={content.pageBuilder} />
		</>
	);
}
