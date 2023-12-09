import { DividerSection } from 'types';
import { cn } from 'utils/classNameUtils';
import { getBorderColor, getWidth } from 'utils/sectionUtils';

export const Divider: React.FC<DividerSection> = ({ theme, width }) => {
	return (
		<section className="overflow-hidden">
			<div className={cn(getWidth(width))}>
				<hr className={cn(getBorderColor(theme))} />
			</div>
		</section>
	);
};
