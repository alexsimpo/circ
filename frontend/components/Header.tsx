import Link from 'next/link';
import { MenuLink } from '../types';

type HeaderProps = {
	menu: MenuLink[];
};

export const Header = ({ menu }: HeaderProps) => {
	console.log('menu', menu);

	return (
		<header>
			<div className="container">
				<div className="flex py-6">
					<div className="w-1/2">CD</div>
					<div className="w-1/2">
						<ul className="flex justify-between">
							{menu.map((item, i) => (
								<li key={i} className="font-semibold uppercase text-sm">
									<Link href={item.link.slug || item.url}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};
