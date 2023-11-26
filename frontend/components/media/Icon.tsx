import { cn } from 'utils/classNameUtils';
import type { Props as SvgProps } from './svg';
import { Svg } from './svg';

export type IconProps = SvgProps & {
	className?: string;
	style?: React.CSSProperties;
	width?: number;
	height?: number;
};

export const Icon: React.FC<IconProps> = ({
	className,
	style,
	width,
	height,
	...props
}) => {
	return (
		<div
			style={{ ...style, width: width, height: height }}
			className={cn(className)}
		>
			<Svg {...props} />
		</div>
	);
};
