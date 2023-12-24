'use client';
import Link from 'next/link';
import { Menu } from 'types';
import { cn } from 'utils/classNameUtils';
import { getUrlFromLink } from 'utils/pageUtils';
import Logo from 'images/logo.svg';
import { MenuSVG } from 'components/svg/menu';
import { getTextSize } from 'utils/sectionUtils';
import { CloseSVG } from 'components/svg/close';
import { useState } from 'react';

interface HeaderProps {
	headerMenu: Menu['menuItems'];
	className?: string;
}

export const Header = ({ className, headerMenu }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header
			className={cn(
				'pointer-events-none sticky top-0 z-50 bg-white',
				className
			)}
		>
			<div className="container pointer-events-auto">
				<div
					className={cn(
						'z-10 flex items-center gap-4 py-5 font-sans font-medium',
						getTextSize('2xl')
					)}
				>
					<div className="w-fit hover:underline sm:w-1/4">
						<Link href="/">Circ Design</Link>
					</div>
					<div className="h-[18px] w-fit sm:w-1/4">
						<Logo />
					</div>
					<div className="hidden w-fit sm:block sm:w-1/4">
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
					<div className="hidden w-fit text-right sm:block sm:w-1/4">
						<Link className="hover:underline" href="/contact">
							Let's Chat
						</Link>
					</div>
					<button
						onClick={() => setIsMenuOpen(true)}
						className="ml-auto h-6 w-6 md:hidden"
					>
						<MenuSVG />
					</button>
				</div>
			</div>
			<Menu
				menuItems={headerMenu}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
		</header>
	);
};

const Menu = ({
	menuItems,
	isMenuOpen,
	setIsMenuOpen,
}: {
	menuItems: Menu['menuItems'];
	isMenuOpen: boolean;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
}) => {
	return (
		<div
			className={cn(
				'absolute left-0 top-0 h-screen w-screen bg-black text-white transition-opacity',
				isMenuOpen
					? 'opacity-1 pointer-events-auto'
					: 'pointer-events-none opacity-0'
			)}
		>
			<div className="container">
				<div className="flex h-screen flex-col py-4">
					<div className="flex items-center border-b border-current pb-4">
						<h3 className={cn('', getTextSize('xl'))}>Menu</h3>
						<button
							onClick={() => setIsMenuOpen(false)}
							className="ml-auto h-6 w-6 md:hidden"
						>
							<CloseSVG />
						</button>
					</div>
					<ul className={cn('flex flex-col', getTextSize('8xl'))}>
						<li
							onClick={() => setIsMenuOpen(false)}
							className="border-b border-current py-2"
						>
							<Link className="hover:underline" href="/">
								Home
							</Link>
						</li>
						{menuItems &&
							menuItems.map((link, i) => (
								<li
									onClick={() => setIsMenuOpen(false)}
									key={i}
									className="border-b border-current py-2"
								>
									<Link className="hover:underline" href={getUrlFromLink(link)}>
										{link.label}
									</Link>
								</li>
							))}
						<li
							onClick={() => setIsMenuOpen(false)}
							className="border-b border-current py-2"
						>
							<Link className="hover:underline" href="/contact">
								Let's Chat
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
