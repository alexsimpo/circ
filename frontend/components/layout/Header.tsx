import Link from 'next/link';
import { ItemLink } from 'types';

type HeaderProps = {
	menu: ItemLink[];
};

export const Header = ({ menu }: HeaderProps) => {
	return (
		<header>
			<div className="container">
				<div className="flex py-5">
					<div className="w-1/2 font-display text-2xl">
						<Link href="/">cd</Link>
					</div>
					<div className="w-1/2 hidden sm:block">
						<ul className="flex justify-between">
							{menu.map((link, i) => (
								<li
									key={i}
									className="font-semibold uppercase text-sm tracking-wide"
								>
									<Link href={link.reference.slug || link.url}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};
