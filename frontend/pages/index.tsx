import { GetStaticProps } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import client from '../sanityClient';
import { Menus, Projects } from '../types';
import { Footer } from '../components/Footer';

type Props = {
	projects: Projects[];
	menus: Menus[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const projects: Projects[] = await client.fetch(`*[_type == 'project']`);
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
			projects,
			menus,
		},
	};
};

export default function IndexPage({ ...props }: Props) {
	const { projects, menus } = props;
	const headerMenu = menus['headerMenu'];
	const footerMenu = menus['footerMenu'];
	const copyrightMenu = menus['copyright'];
	const socialMenu = menus['socialMenu'];

	const hasProjects = projects.length > 0;

	return (
		<>
			<Header menu={headerMenu} />
			<main className="container py-12">
				<div className="w-full">
					<img src="/images/temp-logo.png" />
				</div>
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				<h2>Projects</h2>
				{hasProjects && (
					<ul>
						{projects.map((project) => (
							<li key={project._id}>{project?.name}</li>
						))}
					</ul>
				)}
				{hasProjects && (
					<div>
						<pre>{JSON.stringify(projects, null, 2)}</pre>
					</div>
				)}
				{!hasProjects && <p>No projects to show</p>}
				{!hasProjects && (
					<div>
						<div>¯\_(ツ)_/¯</div>
						<p>
							Your data will show up here when you've configured everything
							correctly
						</p>
					</div>
				)}
			</main>
			<Footer
				menu={footerMenu}
				copyrightMenu={copyrightMenu}
				socialMenu={socialMenu}
			/>
		</>
	);
}
