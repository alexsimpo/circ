// import { getPage } from '@/utils/serverUtils';
import { Metadata, ResolvingMetadata } from 'next';
import { HeroHome } from '../../components/layout/hero-home';
import { SectionBuilder } from '../../components/section-builder';
import { Divider } from '../../components/section/divider';
import getContent from '../../utils/serverUtils/getContent';
import getPageHeader from '../../utils/serverUtils/getPageHeader';
import { HeroContact } from 'components/layout/hero-contact';

type PageProps = {
	params: { slug?: string[] };
};

// export async function generateMetadata(
// 	{ params }: PageProps,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	// const { meta } = await getPage(params.slug || [], localeKey, searchParams);

// 	return {
// 		// title: `${meta.meta_title}`,
// 		// description: meta.meta_description,
// 		// openGraph: {
// 		// 	title: meta.share_title,
// 		// 	description: meta.share_description,
// 		// },
// 	};
// }

export default async function Page() {
	const page = await getPageHeader('page', 'contact');
	const content = await getContent('page', 'contact');

	return (
		<>
			<HeroContact {...page.header} />
			{content.pageBuilder && <SectionBuilder content={content.pageBuilder} />}
		</>
	);
}
