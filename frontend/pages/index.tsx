import { GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/Footer';
import { LogoBlock } from 'components/LogoBlock';
import { useRouter } from 'next/router';
import Image from 'next/image';
import getMenus from 'api/getMenus';
import getPage from 'api/getPage';
import getContent from 'api/getContent';

type Props = {
	menus: Menus[];
	page: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const page = await getPage('page', 'home');
	const menus = await getMenus();
	const content = await getContent('page', 'home');

	return {
		props: {
			menus,
			page,
			content,
		},
	};
};

export default function Page({ ...props }: Props) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const { page, menus } = props;
	const headerMenu = menus['headerMenu'];
	const footerMenu = menus['footerMenu'];
	const copyrightMenu = menus['copyright'];
	const socialMenu = menus['socialMenu'];
	console.log(props);
	if (!page) return;
	return (
		<>
			<Header menu={headerMenu} />
			<main>
				<section className="overflow-hidden">
					<div className="container">
						<div className="lg:min-h-summary-experimental lg:min-h-summary flex flex-col justify-between pb-8 sm:pb-16">
							<LogoBlock />
							<div className="flex flex-col justify-between pt-8 lg:flex-row">
								<h1 className="text-xl lg:text-2xl font-medium w-full sm:w-1/2 mt-auto lg:w-1/4 order-last lg:order-first">
									{page.header && page.header.description}
								</h1>
								<div className="p-4" />
								<div className="relative w-full lg:w-1/2 aspect-16/9 rounded-4xl overflow-hidden ml-auto lg:ml-0 order-first lg:order-last">
									<Image
										src={page.header.image.url}
										alt={page.header.image.alt}
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer
				menu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
