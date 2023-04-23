import { GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/layout/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/layout/Footer';
import { LogoBlock } from 'components/layout/LogoBlock';
import { useRouter } from 'next/router';
import Image from 'next/image';
import getMenus from 'api/getMenus';
import getPage from 'api/getPage';
import getContent from 'api/getContent';
import { getUrl } from 'utils/pageUtils';
import { SectionBuilder } from 'components/SectionBuilder';
import { Media } from 'components/media/Media';

type Props = {
	menus: Menus[];
	page: any;
	content: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const page = await getPage('page', 'home');
	const menus = await getMenus();
	const content = await getContent('page', 'home');

	if (!page) return { notFound: true };

	return {
		props: {
			menus,
			page,
			content: content.pageBuilder,
		},
	};
};

export default function Page({ ...props }: Props) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const { page, menus, content } = props;
	const headerMenu = menus['headerMenu'];
	const footerMenu = menus['footerMenu'];
	const copyrightMenu = menus['copyright'];
	const socialMenu = menus['socialMenu'];

	return (
		<>
			<Header menu={headerMenu} />
			<main>
				<section className="overflow-hidden">
					<div className="container">
						<div className="lg:min-h-summary-experimental lg:min-h-summary flex flex-col justify-between pb-6 md:pb-12">
							<LogoBlock />
							<div className="flex flex-col justify-between pt-12 lg:flex-row">
								<h1 className="text-xl lg:text-2xl font-medium w-full sm:w-1/2 mt-auto lg:w-1/4 order-last lg:order-first">
									{page.header && page.header.description}
								</h1>
								<div className="p-4" />
								<Media
									ratio="16/9"
									imageSrc={page.header.image.url}
									alt={page.header.image.alt}
									className="w-full lg:w-1/2 rounded-3xl ml-auto lg:ml-0 order-first lg:order-last"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="p-10 lg:pt-24" />
				{content && <SectionBuilder content={content} />}
			</main>
			<Footer
				menu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
