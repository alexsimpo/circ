import { GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/Header';
import client from 'sanityClient';
import { Menus, Projects } from 'types';
import { Footer } from 'components/Footer';
import { LogoBlock } from 'components/LogoBlock';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Props = {
	menus: Menus[];
	page: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const page = await client.fetch(`*[_type == 'page' && title == 'Home'][0] {
		header {
			title,
			description,
			'image': media.image.asset->{
				alt,
				_id,
				url
			}
		},
	}`);
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
			page,
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
	console.log(page);
	return (
		<>
			<Header menu={headerMenu} />
			<main>
				<section className="overflow-hidden">
					<div className="container">
						<div className="sm:min-h-summary-experimental sm:min-h-summary flex flex-col justify-between pb-8 sm:pb-16">
							<LogoBlock />
							<div className="flex flex-col justify-between pt-8 lg:flex-row">
								<h1 className="text-xl font-medium w-full md:w-1/2 mt-auto lg:w-1/4 order-last lg:order-first">
									{page.header && page.header.description}
								</h1>
								<div className="p-4" />
								<div className="relative w-full md:w-1/2 aspect-video rounded-4xl overflow-hidden ml-auto lg:ml-0 order-first lg:order-last">
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
