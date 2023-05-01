import { Badge } from 'components/element/Badge';
import { Button } from 'components/element/Button';
import { Media } from 'components/media/Media';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FeaturedProjectsSection } from 'types';
import { cn } from 'utils/classNameUtils';
import { normalizeText } from 'utils/textUtils';

interface ProjectCard {
	project: any;
	className?: string;
	ratio?: '3/2' | '4/5' | '16/9';
	row?: number;
	stacked?: boolean;
}

interface FeaturedProjectProps {
	displayTitle?: boolean;
}

const defaultProjectClasses: ProjectCard[] = [
	{
		project: {
			className: 'lg:col-start-1 lg:col-end-7',
			ratio: '16/9',
		},
	},
	{
		project: {
			className: 'mt-auto lg:col-start-10 lg:col-end-13',
			ratio: '16/9',
		},
	},
	{
		project: {
			className: 'lg:col-start-4 lg:col-end-10',
			ratio: '16/9',
		},
	},
	{
		project: {
			className: 'mb-auto lg:col-start-1 lg:col-end-4',
			ratio: '16/9',
		},
	},
	{
		project: {
			className: 'lg:col-start-7 lg:col-end-13',
			ratio: '16/9',
		},
	},
	{
		project: {
			className: 'lg:col-start-4 lg:col-end-10',
			ratio: '16/9',
		},
	},
];

export const FeaturedProjects: React.FC<
	FeaturedProjectsSection & FeaturedProjectProps
> = ({
	projects,
	displayTitle = false,
	projectClasses = defaultProjectClasses,
	...props
}) => {
	const projectClassesLength = defaultProjectClasses.length;

	return (
		<section className="overflow-hidden">
			<div className="container">
				<div
					className={cn(
						'flex flex-col justify-between',
						!displayTitle ? 'py-16 lg:py-32' : 'py-8 lg:py-16'
					)}
				>
					<div className="grid grid-cols-12 gap-8">
						{!displayTitle && (
							<div className="flex flex-row row-start-1 col-end-13 col-start-1 lg:col-start-10 lg:flex-col ">
								<h2 className="text-2xl font-medium flex-1 lg:flex-none lg:mb-8">
									Selected Projects
								</h2>
								<Button children="View all" as="a" href="/projects" />
							</div>
						)}
						{projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									project={project}
									className={cn(
										'col-start-1 col-end-13',
										projectClasses[index % projectClassesLength].project
											.className
									)}
									ratio={
										projectClasses[index % projectClassesLength].project.ratio
									}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const ProjectCard: React.FC<ProjectCard> = ({ project, className, ratio }) => {
	const contentRef = useRef(null);

	useEffect(() => {
		// Get the maximum height of content in all ProjectCard
		const contentElems = document.querySelectorAll(
			'[data-project-card-content]'
		);
		const maxContentHeight = Math.max(
			...Array.from(contentElems).map((elem) => elem.offsetHeight)
		);

		// Set the height of all ProjectCardContent to the maximum
		const cardContentElems = document.querySelectorAll(
			'[data-project-card-content]'
		);
		Array.from(cardContentElems).forEach((elem) => {
			elem.style.height = `${maxContentHeight}px`;
		});
	}, []);

	return (
		<div
			className={cn(className, 'group flex flex-col justify-between lg:pb-36')}
		>
			<Link href={`projects/${project.slug}`}>
				<Media
					ratio={ratio}
					imageSrc={project.image.url}
					className="rounded-3xl"
				/>
			</Link>
			<div
				ref={contentRef}
				data-project-card-content
				className={cn('flex flex-col justify-start mt-4 gap-2')}
			>
				<h3 className="text-2xl w-full font-medium capitalize group-hover:text-orange-500">
					<Link href={`projects/${project.slug}`}>
						{normalizeText(project.title)}
					</Link>
				</h3>
				<p className="min-w-[60%]">{project.description}</p>
				{/* <Badge className="ml-4" children={'category'} /> */}
			</div>
		</div>
	);
};
