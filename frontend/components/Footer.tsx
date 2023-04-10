import Link from 'next/link';
import { MenuLink } from '../types';
import Image from 'next/image';

type FooterProps = {
	menu: MenuLink[];
	copyrightMenu: MenuLink[];
	socialMenu: MenuLink[];
};

export const Footer = ({ menu, copyrightMenu, socialMenu }: FooterProps) => {
	return (
		<footer>
			<div className="container">
				<div className="flex justify-between pb-10 pt-16">
					<div className="w-1/2">
						<h3 className="text-2xl pb-8">
							We believe in creating great places with our clients through
							collaborative design and ongoing conversations with community.
						</h3>
						<Link href="/contact">Get in Touch</Link>
					</div>
					<div className="flex flex-col justify-between w-1/4">
						<ul className="flex pb-6 font-semibold uppercase text-sm">
							{menu.map((item, i) => (
								<li key={i} className="mr-6">
									<Link href={item.link?.slug || item.url || ''}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
						<h4 className="text-sm">
							Circ Design acknowledges the Jaggera and Turrbal, the traditional
							custodians of the lands on which we operate. We pay our respects
							to Elders past, present and emerging.
						</h4>
					</div>
				</div>
				<hr className="border-black" />
				<div className="flex justify-between pb-16 pt-10">
					<div className="w-1/2">
						<ul className="flex text-xs">
							<li className="mr-6">&copy; Circ Design</li>
							{copyrightMenu.map((item, i) => (
								<li key={i} className="mr-6">
									<Link href={item.link?.slug || item.url || ''}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="w-1/2">
						<ul className="flex font-semibold uppercase text-sm">
							{socialMenu.map((item, i) => (
								<li key={i} className="mr-6">
									<Link href={item.link?.slug || item.url || ''}>
										{/* {console.log(socialMenu)} */}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="w-full">
					<img src="/images/temp-logo.png" />
				</div>
			</div>
		</footer>
	);
};
