const importAll = (r: __WebpackModuleApi.RequireContext) => {
	const svgIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } =
		{};
	r.keys().forEach((key) => {
		const svgName = key.replace('./', '').replace('.svg', '');
		const SvgIcon = r(key).default;
		svgIcons[svgName] = SvgIcon;
	});
	return svgIcons;
};

const icons = importAll(require.context('icons', true, /\.svg$/));

export interface Props
	extends Pick<
		React.SVGProps<SVGSVGElement>,
		| 'viewBox'
		| 'preserveAspectRatio'
		| 'className'
		| 'style'
		| 'fill'
		| 'stroke'
		| keyof React.DOMAttributes<SVGSVGElement>
	> {
	name: string;
	path?: string;
}

export const Svg: React.FC<Props> = ({ name, path = 'icons/', ...props }) => {
	const SvgIcon = icons[name];

	if (!SvgIcon) {
		console.error(`SVG with name "${name}" not found`);
		return null;
	}

	return <SvgIcon viewBox="0 0 24 24" {...props} />;
};
