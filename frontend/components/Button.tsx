import { ComponentType } from 'react';
import { cn } from 'utils/classNameUtils';
import { Icon } from './media/Icon';

interface ButtonProps {
	className?: string;
	href?: string;
	size?: 'sm' | 'md' | 'lg';
	as?: 'button' | 'a' | ComponentType<any>;
	justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export const Button: React.FC<
	ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({
	as: Component = 'button',
	className,
	size = 'md',
	justify = 'between',
	...props
}) => {
	return (
		<Component
			{...props}
			className={cn(
				className,
				'flex w-full items-center font-mono uppercase tracking-widest',
				{
					'text-xxs': size === 'sm',
					'text-xs': size === 'md',
					'text-sm': size === 'lg',
				},
				{
					'justify-start': justify === 'start',
					'justify-center': justify === 'center',
					'justify-end': justify === 'end',
					'justify-between': justify === 'between',
					'justify-around': justify === 'around',
				}
			)}
		/>
	);
};

export const IconButton: React.FC<
	ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ size = 'md', children, ...props }) => {
	return (
		<>
			<Button
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
