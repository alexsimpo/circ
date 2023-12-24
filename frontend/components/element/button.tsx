import { cn } from '../../utils/classNameUtils';
import Link from 'next/link';

interface ButtonProps {
	link?: any;
	type?: string;
	href?: string;
	label?: string;
	ariaLabel?: string;
	className?: string;
	outline?: boolean;
	style?: React.CSSProperties;
	buttonType?: 'button' | 'submit' | 'reset';
}

export const Button = ({
	link,
	type = link && link.type,
	href = link ? link.url : '',
	label = link && link.label ? link.label : 'Read More',
	ariaLabel = label,
	className,
	outline = false,
	style,
	buttonType = 'button',
	...rest
}: ButtonProps) => {
	switch (type) {
		case 'none':
			return null;
		default:
			return (
				<ConditionalLink
					{...rest}
					ariaLabel={ariaLabel}
					className={cn(
						'inline-block h-fit w-fit whitespace-nowrap text-2xl font-medium capitalize transition-all duration-300 hover:underline focus:underline',
						className
					)}
					style={style}
					href={href}
					buttonType={buttonType}
				>
					{label}
				</ConditionalLink>
			);
	}
};

export const ConditionalLink = ({
	href,
	className,
	ariaLabel,
	children,
	style,
	buttonType,
	...rest
}: Partial<
	ButtonProps & { children: string | React.ReactNode }
>): React.ReactElement => {
	const isExternal = href && href.startsWith('http');
	const isAnchor = href && href.startsWith('#');

	if (isExternal) {
		return (
			<a
				aria-label={ariaLabel}
				className={className}
				href={href}
				rel="noreferrer"
				target="_blank"
				type={buttonType}
			>
				{children}
			</a>
		);
	} else if (isAnchor) {
		return (
			// @ts-ignore - type being dumb
			<button
				className={className}
				style={style}
				{...rest}
				onClick={(e) => {
					e.preventDefault();
					const target = document.querySelector(href);
					if (target instanceof HTMLElement) {
						target.scrollIntoView({ behavior: 'smooth' });
					}
				}}
			>
				{children}
			</button>
		);
	} else if (href) {
		return (
			<Link
				aria-label={ariaLabel}
				className={className}
				href={href}
				type={buttonType}
			>
				{children}
			</Link>
		);
	} else if (buttonType) {
		return (
			// @ts-ignore - type being dumb
			<button className={className} style={style} type={buttonType} {...rest}>
				{children}
			</button>
		);
	} else {
		return <>{children}</>;
	}
};
