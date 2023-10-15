import Link from 'next/link';
import { Menu } from 'types';
import { cn } from 'utils/classNameUtils';
import { getUrlFromLink } from 'utils/pageUtils';
import Logo from 'images/logo.svg';

interface HeaderProps {
	headerMenu: Menu['menuItems'];
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className, headerMenu }) => {
	return (
		<header className={cn(className)}>
			<div className="container">
				<div className="flex py-5 items-center gap-4 font-sans text-2xl font-medium">
					<div className="w-fit sm:w-1/4">
						<Link href="/">Circ Design</Link>
					</div>
					<div className="w-fit sm:w-1/4 h-[18px]">
						<Logo />
					</div>
					<div className="w-fit sm:w-1/4 hidden sm:block">
						<ul className="flex">
							{headerMenu &&
								headerMenu.map((link, i) => (
									<li key={i}>
										<Link
											className="hover:underline"
											href={getUrlFromLink(link)}
										>
											{link.label}
										</Link>
										{headerMenu.length - 1 !== i && <span>,&nbsp;</span>}
									</li>
								))}
						</ul>
					</div>
					<div className="w-fit text-right hidden sm:block sm:w-1/4">
						<Link href="/contact">Let's Chat</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
