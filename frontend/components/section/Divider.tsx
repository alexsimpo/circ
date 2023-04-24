import { DividerSection } from 'types';

export const Divider: React.FC<DividerSection> = ({}) => {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<hr className="border-black" />
			</div>
		</section>
	);
};
