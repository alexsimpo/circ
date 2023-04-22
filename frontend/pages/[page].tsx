import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/Footer';
import { useRouter } from 'next/router';
import getPage from 'api/getPage';
import getMenus from 'api/getMenus';
import getContent from 'api/getContent';
import { getUrlFromStaticProps } from 'utils/pageUtils';

type Props = {
	menus: Menus[];
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const page = await getPage('page', getUrlFromStaticProps(params.page));
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
			<Header menu={headerMenu} />
			<main className="container py-4 lg:py-12 "></main>
			<Footer
				menu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
