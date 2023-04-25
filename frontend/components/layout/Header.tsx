import Link from 'next/link';
import { Menu } from 'types';
import { cn } from 'utils/classNameUtils';
import { getUrlFromLink } from 'utils/pageUtils';

interface HeaderProps {
	headerMenu: Menu['menuItems'];
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className, headerMenu }) => {
	console.log(headerMenu);
	return (
		<header className={cn(className)}>
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
									className="font-semibold uppercase text-sm tracking-wide hover:text-orange-500"
								>
									<Link href={getUrlFromLink(link)}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};
