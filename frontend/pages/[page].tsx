import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/Footer';
import { useRouter } from 'next/router';

type Props = {
	menus: Menus[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const menus: Menus[] = await client.fetch(`
	*[_type == 'menu'][0]{
		headerMenu[]{
			label,
			url,
			'link': reference->{
				_type,'slug': slug.current
		  	}
		},
		footerMenu[]{
			label,
			url,
			'link': reference->{
				_type,'slug': slug.current
			}
		},
		copyright[]{
			label,
			url,
			'link': reference->{
			  _type,'slug': slug.current
			}
		},
		socialMenu[]{
			label,
			url,
			'link': reference->{
			  _type,'slug': slug.current
			}
		}
	  }
	  `);

	return {
		props: {
			menus,
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
	console.log(pages);
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
