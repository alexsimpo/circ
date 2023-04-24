import { Badge } from 'components/element/Badge';
import { Button } from 'components/element/Button';
import { Media } from 'components/media/Media';
import Link from 'next/link';
import { FeaturedProjectsSection, Section } from 'types';
import { cn } from 'utils/classNameUtils';

interface ProjectCard {
	project: any;
	className?: string;
	ratio?: '3/2' | '4/5' | '16/9';
	row?: number;
}

const projectClasses: ProjectCard[] = [
	{ project: { className: 'lg:col-end-7', ratio: '3/2', row: 1 } },
	{
		project: {
			className: 'lg:col-start-10 lg:col-end-13',
			ratio: '4/5',
			row: 2,
		},
	},
	{
		project: {
			className: 'lg:col-start-4 lg:col-end-10',
			ratio: '16/9',
			row: 3,
		},
	},
];

export const FeaturedProjects: React.FC<FeaturedProjectsSection> = ({
	projects,
}) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className="flex flex-col justify-between py-16 lg:py-32">
					<div className="grid grid-cols-12 gap-y-12 lg:gap-y-24">
						<div className="flex flex-row row-start-1 col-end-13 col-start-1 lg:col-start-10 lg:flex-col ">
							<h2 className="text-2xl font-medium flex-1 lg:flex-none lg:mb-8">
								Selected Projects
							</h2>
							<Button children="View all" as="a" href="/projects" />
						</div>
						{projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									project={project}
									className={cn(
										'col-start-1 col-end-13',
										projectClasses[index].project.className
									)}
									row={projectClasses[index].project.row}
									ratio={projectClasses[index].project.ratio}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const ProjectCard: React.FC<ProjectCard> = ({
	project,
	className,
	ratio,
	row,
}) => {
	return (
		<div className={cn(className, 'row-span-1')}>
			<Media ratio={ratio} imageSrc={project.image} className="rounded-3xl" />
			<div className="flex items-center justify-between mt-4 ">
				<h3 className="text-2xl font-medium hover:underline">
					<Link href={`projects/${project.slug}`}>{project.title}</Link>
				</h3>
				<Badge className="ml-4" children={'category'} />
			</div>
		</div>
	);
};
