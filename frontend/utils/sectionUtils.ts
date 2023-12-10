export const getWidth = (width?: string) => {
	switch (width) {
		case 'full':
			return 'w-full';
		case 'contained':
			return 'container';
		case 'xxl':
			return 'max-w-7xl';
		case 'xl':
			return 'max-w-6xl';
		case 'l':
			return 'max-w-5xl';
		case 'm':
			return 'max-w-4xl';
		case 's':
			return 'max-w-3xl';
		case 'xs':
			return 'max-w-2xl';
		case 'xxs':
			return 'max-w-xl';
		default:
			return '';
	}
};

export const getHeight = (height?: string) => {
	switch (height) {
		case '100':
			return 'min-h-screen';
		case '90':
			return 'min-h-[90vh]';
		case '80':
			return 'min-h-[80vh]';
		case '75':
			return 'min-h-[75vh]';
		case '66':
			return 'min-h-[66vh]';
		case '50':
			return 'min-h-[50vh]';
		case '33':
			return 'min-h-[33vh]';
		case '25':
			return 'min-h-[25vh]';
		default:
			return '';
	}
};

export const getDirection = (display?: string) => {
	if (display === 'inline') return 'flex-row';
	return 'flex-col';
};

export const getSectionPadding = (padding?: string) => {
	switch (padding) {
		case 'none':
			return 'p-0';
		case 'xxs':
			return 'py-2 md:py-4';
		case 'xxs':
			return 'py-4 md:py-8';
		case 'xs':
			return 'py-6 md:py-12';
		case 's':
			return 'py-8 md:py-16';
		case 'm':
		default:
			return 'py-12 md:py-24';
		case 'l':
			return 'py-16 md:py-32';
		case 'xl':
			return 'py-20 md:py-40';
		case 'xxl':
			return 'py-24 md:py-48';
	}
};

export const getSectionAlignment = (horizontalAlignment?: string) => {
	switch (horizontalAlignment) {
		case 'start':
			return '';
		case 'center':
			return 'mx-auto';
		case 'end':
			return 'ml-auto';
		case 'between':
			return 'align-items-between';
		default:
			return '';
	}
};

export const getItemAlignment = (horizontalAlignment?: string) => {
	switch (horizontalAlignment) {
		case 'start':
			return 'align-items-start';
		case 'center':
			return 'align-items-center';
		case 'end':
			return 'align-items-end';
		case 'between':
			return 'align-items-between';
		default:
			return '';
	}
};

export const getSelfAlignment = (horizontalAlignment?: string) => {
	switch (horizontalAlignment) {
		case 'start':
			return 'self-start';
		case 'center':
			return 'self-center';
		case 'end':
			return 'self-end';
		case 'between':
			return 'self-between';
		default:
			return '';
	}
};

export const getJustifyAlignment = (verticalAlignment?: string) => {
	switch (verticalAlignment) {
		case 'start':
			return 'justify-start';
		case 'center':
			return 'justify-center';
		case 'end':
			return 'justify-end';
		case 'between':
			return 'justify-between';
		default:
			return '';
	}
};

export const getTextAlignment = (textAlignment?: string) => {
	switch (textAlignment) {
		case 'left':
			return 'text-left';
		case 'center':
			return 'text-center';
		case 'right':
			return 'text-right';
		default:
			return 'text-left';
	}
};

export const getTextTransformation = (titleTransform?: string) => {
	switch (titleTransform) {
		case 'uppercase':
			return 'uppercase';
		case 'lowercase':
			return 'lowercase';
		case 'capitalize':
			return 'capitalize';
		case 'none':
		default:
			return '';
	}
};

export const getTextSize = (fontSize: string) => {
	switch (fontSize) {
		case 'xxs':
		case '2xs':
			return 'text-xs';
		case 'xs':
			return 'text-xs';
		case 'sm':
		case 's':
			return 'text-sm';
		case 'm':
		case 'md':
			return 'text-base';
		case 'l':
		case 'lg':
			return 'text-lg';
		case 'xl':
			return 'text-xl';
		case 'xxl':
		case '2xl':
			return 'text-2xl';
		case '3xl':
			return 'text-[1.25rem] md:text-[1.75rem] lg:text-3xl';
		case '4xl':
			return 'text-[1.375rem] md:text-[2.125rem] lg:text-4xl';
		case '5xl':
			return 'text-[2rem] md:text-[2.25rem] lg:text-5xl';
		case '6xl':
			return 'text-[2.125rem] md:text-[3rem] lg:text-6xl';
		case '7xl':
			return 'text-[2.25rem] leading-[1.15] md:text-[3.5rem] lg:text-7xl';
		case '8xl':
			return 'text-[2.5rem] leading-[1.1] md:leading-[1] md:text-[4.25rem] lg:text-8xl';
		case '9xl':
			return 'text-[3rem] leading-[1.1] md:text-[4.75rem] lg:text-9xl';
		default:
			return '';
	}
};

export const getImageWidthFromColumns = (columns?: string) => {
	switch (columns) {
		case '1':
			return 240;
		case '2':
			return 360;
		case '3':
			return 480;
		case '4':
			return 720;
		case '5':
		case '6':
			return 960;
		case '7':
		case '8':
			return 1080;
		case '9':
		case '10':
			return 1440;
		case '11':
		case '12':
		default:
			return 1920;
	}
};

export const getGridColumnSize = (columns?: string | number) => {
	switch (columns) {
		case '1':
		case 1:
			return 'grid-cols-1';
		case '2':
		case 2:
			return 'grid-cols-1 md:grid-cols-2';
		case '3':
		case 3:
			return 'grid-cols-1 md:grid-cols-3';
		case '4':
		case 4:
			return 'grid-cols-2 md:grid-cols-4';
		case '5':
		case 5:
			return 'grid-cols-2 md:grid-cols-5';
		case '6':
		case 6:
			return 'grid-cols-2 md:grid-cols-6';
		default:
			return 'grid-cols-12';
	}
};

export const getGridColumnSpan = (columns?: string) => {
	switch (columns) {
		case '1':
			return 'col-span-6 md:col-span-1';
		case '2':
			return 'col-span-6 md:col-span-2';
		case '3':
			return 'col-span-6 md:col-span-3';
		case '4':
			return 'col-span-12 md:col-span-4';
		case '5':
			return 'col-span-12 md:col-span-5';
		case '6':
			return 'col-span-12 md:col-span-6';
		case '7':
			return 'col-span-12 md:col-span-7';
		case '8':
			return 'col-span-12 md:col-span-8';
		case '9':
			return 'col-span-12 md:col-span-9';
		case '10':
			return 'col-span-12 md:col-span-10';
		case '11':
			return 'col-span-12 md:col-span-11';
		case '12':
			return 'col-span-12';
		default:
			return 'col-span-1';
	}
};

// export const getInlineGridColumnSpan = (columns?: string) => {
// 	if (isImage) {
// 		switch (columns) {
// 			case '1-4':
// 				return 'col-span-12 md:col-span-3';
// 			case '1-3':
// 				return 'col-span-12 md:col-span-4';
// 			default:
// 			case '1-2':
// 				return 'col-span-12 md:col-span-6';
// 			case '2-3':
// 				return 'col-span-12 md:col-span-8';
// 			case '3-4':
// 				return 'col-span-12 md:col-span-9';
// 		}
// 	} else {
// 		switch (columns) {
// 			case '1-4':
// 				return 'col-span-12 md:col-span-9';
// 			case '1-3':
// 				return 'col-span-12 md:col-span-8';
// 			default:
// 			case '1-2':
// 				return 'col-span-12 md:col-span-6';
// 			case '2-3':
// 				return 'col-span-12 md:col-span-4';
// 			case '3-4':
// 				return 'col-span-12 md:col-span-3';
// 		}
// 	}
// };

export const getBackgroundColor = (color?: string) => {
	switch (color) {
		case 'black':
			return 'bg-black';
		case 'white':
			return 'bg-white';
		case 'grey':
			return 'bg-grey';
		case 'green':
			return 'bg-green';
		case 'blue':
			return 'bg-blue';
		case 'orange':
			return 'bg-orange';
		case 'transparent':
			return 'bg-transparent';
		default:
			return '';
	}
};

export const getTextColor = (color?: string) => {
	switch (color) {
		case 'black':
			return 'text-black';
		case 'white':
			return 'text-white';
		case 'grey':
			return 'text-grey';
		case 'green':
			return 'text-green';
		case 'blue':
			return 'text-blue';
		case 'orange':
			return 'text-orange';
		case 'transparent':
			return 'text-transparent';
		default:
			return '';
	}
};

export const getTextHoverColor = (color?: string) => {
	switch (color) {
		case 'black':
			return 'hover:text-black';
		case 'white':
			return 'hover:text-white';
		case 'grey':
			return 'hover:text-grey';
		case 'green':
			return 'hover:text-green';
		case 'blue':
			return 'hover:text-blue';
		case 'orange':
			return 'hover:text-orange';
		case 'transparent':
			return 'hover:text-transparent';
		default:
			return '';
	}
};

export const getBorderColor = (color?: string) => {
	switch (color) {
		case 'black':
			return 'border-black';
		case 'white':
			return 'border-white';
		case 'green':
			return 'border-green';
		case 'blue':
			return 'border-blue';
		case 'orange':
			return 'border-orange';
		case 'transparent':
			return 'border-transparent';
		case 'grey':
		default:
			return 'border-light-200';
	}
};

export const getHorizontalGridGutter = (gutter?: string) => {
	switch (gutter) {
		case 'none':
			return 'gap-0';
		case '2xs':
		case 'xxs':
			return 'gap-x-1  md:gap-x-1.5 lg:gap-x-2';
		case 'xs':
			return 'gap-x-2  md:gap-x-3 lg:gap-x-4';
		default:
		case 's':
		case 'sm':
			return 'gap-x-3  md:gap-x-4 lg:gap-x-6';
		case 'md':
		case 'm':
			return 'gap-x-4  md:gap-x-6 lg:gap-x-8';
		case 'l':
		case 'lg':
			return 'gap-x-5 0 md:gap-x-8 lg:gap-x-12';
		case 'xl':
			return 'gap-x-6 2 md:gap-x-11 lg:gap-x-16';
		case '2xl':
		case 'xxl':
			return 'gap-x-7 4 md:gap-x-16 lg:gap-x-24';
	}
};

export const getVerticalGridGutter = (gutter?: string) => {
	switch (gutter) {
		case 'none':
			return 'gap-0';
		case '2xs':
		case 'xxs':
			return 'gap-y-2 md:gap-y-3 lg:gap-y-4';
		case 'xs':
			return 'gap-y-4 md:gap-y-6 lg:gap-y-8';
		default:
		case 's':
		case 'sm':
			return 'gap-y-6 md:gap-y-8 lg:gap-y-12';
		case 'm':
		case 'md':
			return 'gap-y-8 md:gap-y-12 lg:gap-y-16';
		case 'l':
		case 'lg':
			return 'gap-y-10 md:gap-y-16 lg:gap-y-24';
		case 'xl':
			return 'gap-y-12 md:gap-y-22 lg:gap-y-32';
		case 'xxl':
		case '2xl':
			return 'gap-y-14 md:gap-y-32 lg:gap-y-48';
	}
};

export const getMediaOrder = (mediaAlign?: string) => {
	switch (mediaAlign) {
		default:
		case 'before':
			return 'order-1';
		case 'after':
			return 'order-3';
		case 'before-desktop':
			return 'order-3 md:order-1';
		case 'after-desktop':
			return 'order-1 md:order-3';
	}
};

export const getCardContentPadding = (padding?: string) => {
	switch (padding) {
		default:
		case 'none':
			return 'p-0';
		case 'xxs':
			return 'p-2';
		case 'xs':
			return 'p-3';
		case 's':
			return 'p-4';
		case 'm':
			return 'p-6';
		case 'l':
			return 'p-8';
		case 'xl':
			return 'p-10';
		case 'xxl':
			return 'p-12';
	}
};

export const getBorderRadius = (borderRadius?: string) => {
	switch (borderRadius) {
		default:
		case 'none':
			return '';
		case 'xxs':
			return 'rounded-xs';
		case 'xs':
			return 'rounded-sm';
		case 's':
			return 'rounded-md';
		case 'm':
			return 'rounded-lg';
		case 'l':
			return 'rounded-xl';
		case 'xl':
			return 'rounded-2xl';
		case 'xxl':
			return 'rounded-3xl';
		case '3xl':
			return 'rounded-[5rem]';
		case 'full':
			return 'rounded-full';
	}
};

export const getDesktopLeftBorderRadius = (borderRadius?: string) => {
	switch (borderRadius) {
		default:
		case 'none':
			return '';
		case 'xxs':
			return 'md:rounded-tl-xs md:rounded-bl-xs';
		case 'xs':
			return 'md:rounded-tl-sm md:rounded-bl-sm';
		case 's':
			return 'md:rounded-tl-md md:rounded-bl-md';
		case 'm':
			return 'md:rounded-tl-lg md:rounded-bl-lg';
		case 'l':
			return 'md:rounded-tl-xl md:rounded-bl-xl';
		case 'xl':
			return 'md:rounded-tl-2xl md:rounded-bl-2xl';
		case 'xxl':
			return 'md:rounded-tl-3xl md:rounded-bl-3xl';
		case '3xl':
			return 'md:rounded-tl-[5rem] md:rounded-bl-[5rem]';
		case 'full':
			return 'md:rounded-tl-full md:rounded-bl-full';
	}
};

export const getDesktopRightBorderRadius = (borderRadius?: string) => {
	switch (borderRadius) {
		default:
		case 'none':
			return '';
		case 'xxs':
			return 'md:rounded-tr-xs md:rounded-br-xs ';
		case 'xs':
			return 'md:rounded-tr-sm md:rounded-br-sm';
		case 's':
			return 'md:rounded-tr-md md:rounded-br-md';
		case 'm':
			return 'md:rounded-tr-lg md:rounded-br-lg';
		case 'l':
			return 'md:rounded-tr-xl md:rounded-br-xl';
		case 'xl':
			return 'md:rounded-tr-2xl md:rounded-br-2xl';
		case 'xxl':
			return 'md:rounded-tr-3xl md:rounded-br-3xl';
		case '3xl':
			return 'md:rounded-tr-[5rem] md:rounded-br-[5rem]';
		case 'full':
			return 'md:rounded-tr-full md:rounded-br-full';
	}
};

export const getLeftBorderRadius = (borderRadius?: string) => {
	switch (borderRadius) {
		default:
		case 'none':
			return '';
		case 'xxs':
			return 'rounded-tl-xs rounded-bl-xs';
		case 'xs':
			return 'rounded-tl-sm rounded-bl-sm';
		case 's':
			return 'rounded-tl-md rounded-bl-md';
		case 'm':
			return 'rounded-tl-lg rounded-bl-lg';
		case 'l':
			return 'rounded-tl-xl rounded-bl-xl';
		case 'xl':
			return 'rounded-tl-2xl rounded-bl-2xl';
		case 'xxl':
			return 'rounded-tl-3xl rounded-bl-3xl';
		case '3xl':
			return 'rounded-tl-[5rem] rounded-bl-[5rem]';
		case 'full':
			return 'rounded-tl-full rounded-bl-full';
	}
};

export const getRightBorderRadius = (borderRadius?: string) => {
	switch (borderRadius) {
		default:
		case 'none':
			return '';
		case 'xxs':
			return 'rounded-tr-xs rounded-br-xs ';
		case 'xs':
			return 'rounded-tr-sm rounded-br-sm';
		case 's':
			return 'rounded-tr-md rounded-br-md';
		case 'm':
			return 'rounded-tr-lg rounded-br-lg';
		case 'l':
			return 'rounded-tr-xl rounded-br-xl';
		case 'xl':
			return 'rounded-tr-2xl rounded-br-2xl';
		case 'xxl':
			return 'rounded-tr-3xl rounded-br-3xl';
		case '3xl':
			return 'rounded-tr-[5rem] rounded-br-[5rem]';
		case 'full':
			return 'rounded-tr-full rounded-br-full';
	}
};

export const getSectionTitle = (title?: string) => {
	switch (title) {
		case 'normal':
			return `font-sans ${getTextSize('xxl')}`;
		case 'mono':
			return 'font-mono text-mono';
		case 'display':
			return `font-display uppercase ${getTextSize('9xl')}`;
		case 'wide':
		default:
			return `font-wide uppercase ${getTextSize('8xl')}`;
	}
};

export const getFontFamily = (family?: string) => {
	switch (family) {
		case 'mono':
			return 'font-mono';
		case 'display':
			return 'font-display uppercase';
		case 'wide':
			return 'font-wide';
		default:
			return 'font-sans';
	}
};

export const getDisplayLayout = (display?: string) => {
	switch (display) {
		case 'inline':
			return 'md:flex';
		default:
		case 'block':
			return 'flex flex-col';
	}
};

export const getMediaWidth = (width?: string) => {
	switch (width) {
		case '1-4':
			return 'w-1/4';
		case '1-3':
			return 'w-1/3';
		case '1-2':
			return 'w-1/2';
		case '2-3':
			return 'w-2/3';
		case '3-4':
			return 'w-3/4';
		case '4rem':
			return 'w-16';
		case '8rem':
			return 'w-32';
		case '12rem':
			return 'w-48';
		case '16rem':
			return 'w-64';
		default:
			return '';
	}
};

export const getSectionalPadding = (padding?: string) => {
	switch (padding) {
		case 'none':
			return 'p-0';
		case '2xs':
		case 'xxs':
			return 'py-2 md:py-4';
		case 'xs':
			return 'py-4 md:py-8';
		case 'sm':
		case 's':
			return 'py-6 md:py-12';
		case 'md':
		case 'm':
			return 'py-8 md:py-16';
		case 'lg':
		case 'l':
			return 'py-10 md:py-20';
		case 'xl':
			return 'py-12 md:py-24';
		case '2xl':
		case 'xxl':
		default:
			return 'py-14 md:py-28';
	}
};
