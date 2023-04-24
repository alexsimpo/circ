import { GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/layout/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/layout/Footer';
import { LogoBlock } from 'components/layout/LogoBlock';
import { useRouter } from 'next/router';
import getMenus from 'api/getMenus';
import getPage from 'api/getPage';
import getContent from 'api/getContent';
import { SectionBuilder } from 'components/SectionBuilder';
import { Media } from 'components/media/Media';
import { Button } from 'components/element/Button';

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
						<div className="flex flex-col justify-between pb-16 md:pb-32">
							<LogoBlock className="lg:pt-8" />
							<div className="flex flex-col justify-between pt-12 lg:pt-24 lg:flex-row">
								<div className="w-full sm:w-1/2 mt-auto lg:w-1/4 order-last lg:order-first">
									<h1 className="text-xl lg:text-2xl font-medium mb-8">
										{page.header && page.header.description}
									</h1>
									<Button
										as="a"
										className=""
										children="Read More"
										href="/about"
									/>
								</div>
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
				{content && SectionBuilder(content)}
			</main>
			<Footer
				menu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
