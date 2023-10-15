// import { GetStaticPaths, GetStaticProps } from 'next';
// import React from 'react';
// import { Header } from 'components/layout/Header';
// import client from 'sanityClient';
// import { Menus, Projects } from 'types';
// import { Footer } from 'components/layout/Footer';
// import { useRouter } from 'next/router';
// import getMenus from 'utils/serverUtils/getMenus';
// import getContent from 'utils/serverUtils/getContent';
// import { getUrlFromStaticProps } from 'utils/pageUtils';
// import { SectionBuilder } from 'components/SectionBuilder';
// import { Media } from 'components/media/Media';
// import { cn } from 'utils/classNameUtils';
// import getProjectHeader from 'utils/serverUtils/getProjectHeader';

// type Props = {
// 	page: any;
// 	menus: Menus[];
// 	content: any;
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
// 	const page = await getProjectHeader(
// 		'project',
// 		getUrlFromStaticProps(params.project)
// 	);
// 	const menus = await getMenus();
// 	const content = await getContent(
// 		'project',
// 		getUrlFromStaticProps(params.project)
// 	);

// 	if (!page) return { notFound: true };

// 	return {
// 		props: {
// 			menus,
// 			page,
// 			content: content.pageBuilder,
// 		},
// 	};
// };

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const projects = await client.fetch(`
// 	  *[_type == 'project'] {
// 		slug {
// 		  current
// 		}
// 	  }
// 	`);

// 	const paths = projects.map((project) => ({
// 		params: {
// 			project: project.slug ? `/projects/${project.slug.current}` : '/',
// 		},
// 	}));

// 	return { paths, fallback: true };
// };

// export default function Page({ ...props }: Props) {
// 	const router = useRouter();

// 	if (router.isFallback) {
// 		return <div>Loading...</div>;
// 	}

// 	const { menus, content, page } = props;
// 	const headerMenu = menus['headerMenu'];
// 	const footerMenu = menus['footerMenu'];
// 	const copyrightMenu = menus['copyright'];
// 	const socialMenu = menus['socialMenu'];

// 	return (
// 		<>
// 			<Header
// 				headerMenu={headerMenu}
// 				className="absolute w-full z-10 text-white"
// 			/>
// 			<main>
// 				<section className="relative min-h-128 h-half-screen overflow-hidden">
// 					<Media imageSrc={page.header.image.url} fill />
// 					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 from-5% via-transparent"></div>
// 				</section>
// 				<section>
// 					<div className="container">
// 						<div className={cn('flex flex-col py-4', 'lg:flex-row lg:py-8')}>
// 							<div className="w-full lg:w-1/2">
// 								<h1 className="text-8xl font-display max-w-md">
// 									{page.displayTitle || page.title}
// 								</h1>
// 							</div>
// 							<div className="w-full lg:w-1/2">
// 								<DetailSegment title="Year" content={page.details.year} />
// 								<DetailSegment
// 									title="Location"
// 									content={page.details.location}
// 								/>
// 								<DetailSegment
// 									title="Scope of Work"
// 									content={page.details.scope}
// 								/>
// 								<DetailSegment title="Credits" content={page.details.credits} />
// 								<p className="pt-6">{page.details.description}</p>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				{content && SectionBuilder(content)}
// 			</main>
// 			<Footer
// 				footerMenu={footerMenu}
// 				copyrightMenu={copyrightMenu}
// 				socialMenu={socialMenu}
// 			/>
// 		</>
// 	);
// }

// const DetailSegment: React.FC<{ title: string; content: string }> = ({
// 	title,
// 	content,
// }) => {
// 	if (!content) return <></>;
// 	return (
// 		<div className="flex flex-row border-b border-black py-4">
// 			<p className="text-xs font-mono uppercase tracking-widest mt-1.5 w-1/2">
// 				{title}
// 			</p>
// 			<p className="text-md w-1/2">{content}</p>
// 		</div>
// 	);
// };
