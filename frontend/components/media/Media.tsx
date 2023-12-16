'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { cn } from 'utils/classNameUtils';

interface MediaProps {
	className?: string;
	style?: React.CSSProperties;
	width?: number;
	height?: number;
	ratio?:
		| '3/2'
		| '5/4'
		| '16/9'
		| '1'
		| '4/3'
		| '3/4'
		| '9/16'
		| '4/5'
		| '2/3'
		| '2/1'
		| '3/1';
	image?: {
		url: string;
		alt: string;
	};
	video?: {
		url: string;
		alt: string;
	};
	videoSrc?: string;
	imageSrc?: string;
	alt?: string;
	fill?: boolean;
	hideTransition?: boolean;
}

export const Media: React.FC<MediaProps> = ({
	className,
	style,
	width,
	height,
	ratio = '16/9',
	fill = false,
	image,
	video,
	videoSrc = video && video.url,
	imageSrc = image && image.url,
	alt,
	hideTransition = false,
	...props
}) => {
	const { ref: mediaRef, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
		delay: 100,
	});

	if (!videoSrc && !imageSrc) return;

	return (
		<figure
			ref={mediaRef}
			className={cn(
				className,
				'overflow-hidden transition-all duration-700',
				fill ? 'absolute inset-0 h-full w-full' : 'relative',
				!hideTransition && !inView ? 'opacity-0' : 'opacity-100',
				{
					'aspect-1/1': ratio === '1',
					'aspect-16/9': ratio === '16/9',
					'aspect-3/2': ratio === '3/2',
					'aspect-4/3': ratio === '4/3',
					'aspect-5/4': ratio === '5/4',
					'aspect-9/16': ratio === '9/16',
					'aspect-2/3': ratio === '2/3',
					'aspect-3/4': ratio === '3/4',
					'aspect-4/5': ratio === '4/5',
					'aspect-2/1': ratio === '2/1',
					'aspect-[3/1]': ratio === '3/1',
				}
			)}
		>
			{(videoSrc && <video>video</video>) ||
				(imageSrc && (
					<Image
						loading="lazy"
						src={imageSrc}
						alt={alt || 'default'}
						fill
						className="object-cover"
					/>
				))}
		</figure>
	);
};
