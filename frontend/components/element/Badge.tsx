import { ComponentType } from 'react';
import { cn } from 'utils/classNameUtils';
import { Icon } from '../media/Icon';

interface BadgeProps {
	className?: string;
	href?: string;
	size?: 'sm' | 'md' | 'lg';
	as?: 'button' | 'a' | ComponentType<any>;
	justify?: 'start' | 'center' | 'end' | 'between' | 'around';
	theme?: string;
}

export const Badge: React.FC<
	BadgeProps & React.HTMLAttributes<HTMLButtonElement>
> = ({
	as: Component = 'button',
	className,
	size = 'md',
	justify = 'between',
	theme = 'green-500',
	...props
}) => {
	return (
		<Component
			{...props}
			className={cn(
				className,
				'flex items-center font-mono uppercase tracking-widest',
				{
					'rounded-sm text-badge-sm pt-1.5 pb-0.5 px-2.5 h-4': size === 'sm',
					'rounded-md text-badge-md pt-2 pb-1.5 px-3 h-5': size === 'md',
					'rounded-lg text-badge-lg pt-2.5 pb-2 px-3.5 h-6': size === 'lg',
				},
				{
					'justify-start': justify === 'start',
					'justify-center': justify === 'center',
					'justify-end': justify === 'end',
					'justify-between': justify === 'between',
					'justify-around': justify === 'around',
				},
				{
					'bg-green-500 text-white': theme === 'green-500',
				}
			)}
		/>
	);
};

export const IconBadge: React.FC<
	BadgeProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ size = 'md', children, ...props }) => {
	return (
		<>
			<Badge
				{...props}
				className={cn(props.className)}
				children={
					<>
						<span
							className={cn({
								'h-2.5': size === 'sm',
								'h-3': size === 'md',
								'h-3.5': size === 'lg',
							})}
						>
							{children}
						</span>
						<Icon
							className={cn({
								'w-5 h-5': size === 'sm',
								'w-6 h-6': size === 'md',
								'w-7 h-7': size === 'lg',
							})}
							name="arrow-right"
						/>
					</>
				}
			/>
		</>
	);
};
