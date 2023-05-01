import { GetStaticProps } from 'next';
import React from 'react';
import { Header } from 'components/layout/Header';
import { Menus, Projects } from 'types';
import { Footer } from 'components/layout/Footer';
import { useRouter } from 'next/router';
import getMenus from 'api/getMenus';
import getPageHeader from 'api/getPageHeader';
import getContent from 'api/getContent';
import { SectionBuilder } from 'components/SectionBuilder';
import getProjects from 'api/getProjects';
import { FeaturedProjects } from 'components/section/FeaturedProjects';

type Props = {
	projects: Projects[];
	menus: Menus[];
	content: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const menus = await getMenus();
	const page = await getPageHeader('page', 'projects');
	const content = await getContent('page', 'projects');
	const projects = await getProjects();

	if (!page) return { notFound: true };

	return {
		props: {
			menus,
			page,
			projects,
			content: content.pageBuilder,
		},
	};
};

export default function Page({ ...props }: Props) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const { projects, menus, content } = props;
	const headerMenu = menus['headerMenu'];
	const footerMenu = menus['footerMenu'];
	const copyrightMenu = menus['copyright'];
	const socialMenu = menus['socialMenu'];

	const hasProjects = projects.length > 0;

	return (
		<>
			<Header headerMenu={headerMenu} />
			<main>
				<section className="overflow-hidden">
					<div className="container">
						<div className="flex flex-row row-start-1 col-end-13 col-start-1 lg:flex-col lg:pt-16">
							<h1 className="text-5xl lg:text-8xl font-display flex-1 lg:flex-none">
								selEcted proJects
							</h1>
						</div>
					</div>
				</section>
				{hasProjects && (
					<FeaturedProjects displayTitle={true} projects={projects} />
				)}
				{content && SectionBuilder(content)}
			</main>
			<Footer
				footerMenu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
