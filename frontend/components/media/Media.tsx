import Image from 'next/image';
import { cn } from 'utils/classNameUtils';

interface MediaProps {
	className?: string;
	style?: React.CSSProperties;
	width?: number;
	height?: number;
	ratio?: '3/2' | '5/4' | '16/9' | '1' | '4/3' | '3/4' | '9/16' | '4/5' | '2/3';
	videoSrc?: string;
	imageSrc?: string;
	alt?: string;
	fill?: boolean;
}

export const Media: React.FC<MediaProps> = ({
	className,
	style,
	width,
	height,
	ratio = '16/9',
	videoSrc,
	fill = false,
	imageSrc,
	alt,
	...props
}) => {
	if (!videoSrc && !imageSrc) return;

	return (
		<figure
			className={cn(
				className,
				'h-full w-full overflow-hidden transition-all',
				fill ? 'absolute inset-0' : 'relative',
				{
					'aspect-1': ratio === '1',
					'aspect-16/9': ratio === '16/9',
					'aspect-3/2': ratio === '3/2',
					'aspect-4/3': ratio === '4/3',
					'aspect-5/4': ratio === '5/4',
					'aspect-9/16': ratio === '9/16',
					'aspect-2/3': ratio === '2/3',
					'aspect-3/4': ratio === '3/4',
					'aspect-4/5': ratio === '4/5',
				}
			)}
		>
			{(videoSrc && <video>video</video>) ||
				(imageSrc && (
					<Image loading="lazy" src={imageSrc} alt={alt || 'default'} fill className="object-cover" />
				))}
		</figure>
	);
};
