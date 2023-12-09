import Link from 'next/link';
import { Menu } from 'types';
import { Button } from 'components/element/button';
import { getUrlFromLink } from 'utils/pageUtils';
import Logo from 'images/logo.svg';

interface FooterProps {
	footerMenu: Menu['menuItems'];
	copyrightMenu: Menu['menuItems'];
	socialMenu: Menu['menuItems'];
}

export const Footer: React.FC<FooterProps> = ({
	footerMenu,
	copyrightMenu,
	socialMenu,
}) => {
	return (
		<footer className="border-t border-black text-2xl font-medium">
			<div className="container">
				<div className="lg:pt-18 flex flex-col justify-between pb-6 pt-9 sm:flex-row lg:pb-12">
					<div className="w-1/2">
						<div className="flex items-center gap-4 pb-4 md:pb-8">
							<Link href="/">Circ Design</Link>
							<div>
								<Logo />
							</div>
						</div>
						<ul className="pb-4 md:pb-0">
							{footerMenu &&
								footerMenu.map((link, i) => (
									<li key={i} className="mr-6">
										<Link
											className="hover:underline"
											href={getUrlFromLink(link)}
										>
											{link.label}
										</Link>
									</li>
								))}
						</ul>
					</div>
					<div className="sm:w-1/3">
						<h3 className="font-normal">
							Circ Design acknowledges the Jaggera and Turrbal, the traditional
							custodians of the lands on which we operate. We pay our respects
							to Elders past, present and emerging.
						</h3>
					</div>
				</div>
				<hr className="border-black" />
				<div className="flex flex-wrap justify-between gap-4 pb-6 pt-6 sm:pb-12 sm:pt-12">
					<div>
						<ul className="flex">
							<li className="mr-6">&copy; Circ Design</li>
							{copyrightMenu &&
								copyrightMenu.map((link, i) => (
									<li className="hover:underline" key={i}>
										<Link href={getUrlFromLink(link)}>{link.label}</Link>
									</li>
								))}
						</ul>
					</div>
					<div>
						<ul className="flex justify-end">
							{socialMenu &&
								socialMenu.map((link, i) => (
									<li key={i}>
										<Link
											className="hover:underline"
											href={getUrlFromLink(link)}
										>
											{link.label}
										</Link>
										{socialMenu.length - 1 !== i && <span>,&nbsp;</span>}
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
