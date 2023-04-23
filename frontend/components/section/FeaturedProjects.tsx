import { Badge } from 'components/element/Badge';
import { Media } from 'components/media/Media';
import Link from 'next/link';
import { cn } from 'utils/classNameUtils';

type FeaturedProjects = {
	section: any;
};

type ProjectCard = {
	project: any;
	className?: string;
	ratio?: '3/2' | '4/5' | '16/9';
	row?: number;
};

const projectClasses = [
	{ className: 'lg:col-end-7', ratio: '3/2', row: 1 },
	{ className: 'lg:col-start-10 lg:col-end-13', ratio: '4/5', row: 2 },
	{ className: 'lg:col-start-4 lg:col-end-10', ratio: '16/9', row: 3 },
];

export const FeaturedProjects = ({ section }: FeaturedProjects) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<div className="flex flex-col justify-between py-16 lg:py-32">
					<div className="grid grid-cols-12 gap-y-24">
						{section.projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									project={project}
									className={cn(
										'col-start-1 col-end-13',
										projectClasses[index].className
									)}
									row={projectClasses[index].row}
									ratio={projectClasses[index].ratio}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ project, className, ratio, row }) => {
	return (
		<div
			className={cn(className, {
				'row-start-1 row-end-1': row === 1,
				'row-start-2 row-end-2': row === 2,
				'row-start-3 row-end-3': row === 3,
				'row-start-4 row-end-4': row === 4,
			})}
		>
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
