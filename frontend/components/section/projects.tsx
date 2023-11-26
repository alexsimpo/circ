'use client';
import { Button } from 'components/element/button';
import { Media } from 'components/media/media';
import Link from 'next/link';
import { FeaturedProjectsSection } from 'types';
import { cn } from 'utils/classNameUtils';
import {
	getBackgroundColor,
	getHorizontalGridGutter,
	getVerticalGridGutter,
} from 'utils/sectionUtils';
import { normalizeText } from 'utils/textUtils';

interface ProjectCard {
	project: any;
	className?: string;
	ratio?: '3/2' | '4/5' | '16/9';
	row?: number;
	stacked?: boolean;
}

const categories = [
	{
		'slug': 'urban-design',
		'color': 'grey'
	},
	{
		'slug': 'architecture',
		'color': 'green'
	},
	{
		'slug': 'landscape-design',
	}
]

const defaultProjectClasses: ProjectCard[] = [
	{
		project: {
			className: 'lg:col-start-1 lg:col-end-7',
		},
	},
	{
		project: {
			className: 'lg:col-start-10 lg:col-end-13',
		},
	},
	{
		project: {
			className: 'lg:col-start-4 lg:col-end-7',
		},
	},
	{
		project: {
			className: 'mb-auto lg:col-start-7 lg:col-end-13',
		},
	},
	{
		project: {
			className: 'lg:col-start-1 lg:col-end-4',
		},
	},
	{
		project: {
			className: 'lg:col-start-4 lg:col-end-10',
		},
	},
];

export const FeaturedProjects: React.FC<
	FeaturedProjectsSection
> = ({
	projects,
	projectClasses = defaultProjectClasses,
	heading,
	link,
	hasFilter,
	...props
}) => {
	if(!projects) return null;
	const projectClassesLength = defaultProjectClasses.length;

	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className={cn('flex flex-col justify-between', 'py-16 lg:py-32')}>
					{(heading || link || hasFilter) && (
						<div className="flex w-full justify-between pb-12">
							{heading && <h2 className="text-2xl font-medium">{heading}</h2>}
							{link && <Button link={link} label="View All" />}
							{hasFilter && (
								<div className="flex gap-2">
									<button className="rounded-full h-5 w-5 bg-green" />
									<button className="rounded-full h-5 w-5 bg-grey" />
									<button className="rounded-full h-5 w-5 bg-grey" />
									<button className="rounded-full h-5 w-5 bg-grey" />
								</div>
							)}
						</div>
					)}
					<div
						className={cn(
							'grid grid-cols-12',
							getVerticalGridGutter('m'),
							getHorizontalGridGutter('s')
						)}
					>
						{projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									project={project}
									index={index}
									className={cn(
										'col-start-1 col-end-13',
										projectClasses[index % projectClassesLength].project
											.className
									)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const ProjectCard: React.FC<ProjectCard> = ({ project, className, index }) => {
	const category = categories[index % 2]

	return (
		<div className={cn(className, 'group flex flex-col')}>
			<Link href={`projects/${project.slug}`}>
				<div className="relative overflow-hidden transition-all hover:rounded-4xl h-[20rem] md:h-[28rem]">
					<Media imageSrc={project.image.url} fill />
				</div>
			</Link>
			<div className={cn('flex mt-4 justify-between gap-2')}>
				<h3 className="w-full text-2xl font-medium capitalize group-hover:underline">
					<Link href={`projects/${project.slug}`}>
						{normalizeText(project.title)}
					</Link>
				</h3>
				<div className='flex gap-2 items-center'>
					{/* {categories.map((category, index) => <Link key={`${category.slug}-${index}`} href={`projects/${category.slug}`}><div className={cn('rounded-full h-5 w-5', getBackgroundColor(category.color))} /></Link>)} */}
					<Link key={`${category.slug}-${index}`} href={`projects/${category.slug}`}><div className={cn('rounded-full h-5 w-5', getBackgroundColor(category.color))} /></Link>
				</div>
			</div>
		</div>
	);
};
