import { GetStaticProps } from 'next';
import React from 'react';
import { createClient } from 'next-sanity';

type Project = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	name: string;
};

type Props = {
	projects: Project[];
};

const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-04-08',
	useCdn: false,
});

export default function IndexPage({ projects }: Props) {
	const hasProjects = projects.length > 0;

	return (
		<>
			<header>
				<h1>Sanity + Next.js</h1>
			</header>
			<main>
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
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const projects: Project[] = await client.fetch(`*[_type == 'project']`);

	return {
		props: {
			projects,
		},
	};
};
