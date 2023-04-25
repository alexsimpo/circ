import Link from 'next/link';
import { Menu } from 'types';
import { LogoBlock } from './LogoBlock';
import { Button } from 'components/element/Button';
import { getUrlFromLink } from 'utils/pageUtils';

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
		<footer className="border-t border-black">
			<div className="container">
				<div className="flex flex-col sm:flex-row justify-between pb-8 pt-12 lg:pt-24 lg:pb-16">
					<div className="sm:w-1/2">
						<h3 className="text-2xl pb-8">
							We believe in creating great places with our clients through
							collaborative design and ongoing conversations with community.
						</h3>
						<Button href="/contact" as="a" children="Get in Touch" />
					</div>
					<div className="flex flex-col justify-between pt-8 sm:w-1/4 sm:pt-0">
						<ul className="flex pb-6 font-semibold uppercase text-sm tracking-wide">
							{footerMenu.map((link, i) => (
								<li key={i} className="mr-6">
									<Link href={getUrlFromLink(link)}>{link.label}</Link>
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
				<div className="flex justify-between pt-5 pb-8 sm:pb-16 sm:pt-10">
					<div className="sm:w-1/2">
						<ul className="flex text-xs">
							<li className="mr-6">&copy; Circ Design</li>
							{copyrightMenu.map((link, i) => (
								<li key={i} className="mr-6">
									<Link href={getUrlFromLink(link)}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="sm:w-1/2">
						<ul className="flex font-semibold uppercase text-sm">
							{socialMenu.map((link, i) => (
								<li key={i} className="mr-6">
									<Link href={getUrlFromLink(link)}>
										{/* {console.log(socialMenu)} */}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<LogoBlock />
				<div className="p-2 sm:p-6" />
			</div>
		</footer>
	);
};
