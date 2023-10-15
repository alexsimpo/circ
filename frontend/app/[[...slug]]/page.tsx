// import { getPage } from '@/utils/serverUtils';
import { Metadata, ResolvingMetadata } from 'next';

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
	// const page = await getPage(params.slug || [], localeKey, searchParams);

	return <>Individual page</>;
}
