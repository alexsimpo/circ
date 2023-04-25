import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/layout/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/layout/Footer';
import { useRouter } from 'next/router';
import getPageHeader from 'api/getPageHeader';
import getMenus from 'api/getMenus';
import getContent from 'api/getContent';
import { getUrlFromStaticProps } from 'utils/pageUtils';

type Props = {
	menus: Menus[];
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const page = await getPageHeader('page', getUrlFromStaticProps(params.page));
	const menus = await getMenus();
	const content = await getContent('page', getUrlFromStaticProps(params.page));

	if (!page) return { notFound: true };

	return {
		props: {
			menus,
			page,
			content,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await client.fetch(`
	  *[_type == 'page'] {
		slug {
		  current
		}
	  }
	`);

	const paths = pages.map((page) => ({
		params: { page: page.slug ? page.slug.current : '/' },
	}));

	return { paths, fallback: true };
};

export default function Page({ ...props }: Props) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const { menus } = props;
	const headerMenu = menus['headerMenu'];
	const footerMenu = menus['footerMenu'];
	const copyrightMenu = menus['copyright'];
	const socialMenu = menus['socialMenu'];

	return (
		<>
			<Header headerMenu={headerMenu} />
			<main className="container py-4 lg:py-12 "></main>
			<Footer
				footerMenu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
