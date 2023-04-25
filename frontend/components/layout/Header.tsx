import Link from 'next/link';
import { Menu } from 'types';

type HeaderProps = {
	headerMenu: Menu['menuItems'];
};

export const Header = ({ headerMenu }: HeaderProps) => {
	return (
		<header>
			<div className="container">
				<div className="flex py-5">
					<div className="w-1/2 font-display text-2xl">
						<Link href="/">cd</Link>
					</div>
					<div className="w-1/2 hidden sm:block">
						<ul className="flex justify-between">
							{headerMenu.map((link, i) => (
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
