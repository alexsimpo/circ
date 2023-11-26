// import { getPage } from '@/utils/serverUtils';
import { SectionBuilder } from 'components/section-builder';
import { HeroText } from 'components/layout/hero-text';
import { Metadata, ResolvingMetadata } from 'next';
import { getUrlFromStaticProps } from 'utils/pageUtils';
import getContent from 'utils/serverUtils/getContent';

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
	// const page = await getPage(params.slug || [], localeKey, searchParams);
	const content = await getContent('page', 'home');

	return (
		<>
			<HeroText />
			<SectionBuilder content={content.pageBuilder} />
		</>
	);
}
