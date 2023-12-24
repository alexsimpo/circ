'use client';
import { Button, ConditionalLink } from '../element/button';
import { Media } from '../media/media';
import { FeaturedProjectsSection } from '../../types';
import { cn } from '../../utils/classNameUtils';
import {
	getHorizontalGridGutter,
	getSectionalPadding,
	getVerticalGridGutter,
} from '../../utils/sectionUtils';
import { normalizeText } from '../../utils/textUtils';

interface ProjectCard {
	project: any;
	className?: string;
	ratio?: '3/2' | '4/5' | '16/9';
	row?: number;
	stacked?: boolean;
	index?: number;
}

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

export const FeaturedProjects: React.FC<FeaturedProjectsSection> = ({
	projects,
	projectClasses = defaultProjectClasses,
	heading,
	link,
	hasFilter,
	...props
}) => {
	if (!projects) return null;
	const projectClassesLength = defaultProjectClasses.length;

	return (
		<section className="overflow-hidden">
			<div className="container">
				<div
					className={cn('flex flex-col justify-between', getSectionalPadding())}
				>
					{(heading || link || hasFilter) && (
						<div className="flex w-full justify-between pb-12">
							{heading && <h2 className="text-2xl font-medium">{heading}</h2>}
							{link && <Button link={link} label="View All" />}
							{hasFilter && (
								<div className="flex gap-2">
									<button className="h-5 w-5 rounded-full bg-green" />
									<button className="h-5 w-5 rounded-full bg-grey" />
									<button className="h-5 w-5 rounded-full bg-grey" />
									<button className="h-5 w-5 rounded-full bg-grey" />
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
	console.log('project', project);
	return (
		<div className={cn(className, 'group flex flex-col')}>
			<ConditionalLink href={`projects/${project.slug}`}>
				<div className="relative h-[20rem] overflow-hidden transition-all hover:rounded-4xl md:h-[28rem]">
					{project.image && <Media imageSrc={project.image.url} fill />}
				</div>
			</ConditionalLink>
			<div className={cn('mt-4 flex justify-between gap-2')}>
				<h3 className="w-full text-2xl font-medium capitalize group-hover:underline">
					<ConditionalLink href={`projects/${project.slug}`}>
						{normalizeText(project.title)}
					</ConditionalLink>
				</h3>
				<div className="flex items-center gap-2">
					{project.categories &&
						project.categories.map((category, index) => (
							<div
								key={`${category.title}-${index}`}
								className={cn('h-5 w-5 rounded-full')}
								style={{ background: category.color.value }}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
