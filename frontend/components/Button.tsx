import { ComponentType } from 'react';
import { cn } from 'utils/classNameUtils';

interface ButtonProps {
	className?: string;
	href?: string;
	size?: 'sm' | 'md' | 'lg';
	as?: 'button' | 'a' | ComponentType<any>;
}

export const Button: React.FC<
	ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ as: Component = 'button', className, size = 'md', ...props }) => {
	return (
		<Component
			{...props}
			className={cn(className, 'font-mono uppercase tracking-widest', {
				'text-xxs': size === 'sm',
				'text-xs': size === 'md',
				'text-sm': size === 'lg',
			})}
		/>
	);
};
