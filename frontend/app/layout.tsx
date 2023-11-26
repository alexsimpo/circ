// import {} from '@/utils/serverUtils';
import { Header } from 'components/layout/header';
import '../css/globals.css';
import getMenus from 'utils/serverUtils/getMenus';
import { Footer } from 'components/layout/footer';

export const metadata = {
	title: {
		template: '%s | Circ Design',
		default: 'Circ Design',
	},
	description: 'Circ Design.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const [navigation, site, search_items, translations, localeKey] =
	// 	await Promise.all([
	// 	]);
	const [menus] = await Promise.all([getMenus()]);
	const { headerMenu, footerMenu, copyrightMenu, socialMenu } = menus;
	return (
		<html>
			<body>
				<Header headerMenu={headerMenu} />
				<main>{children}</main>
				<Footer
					footerMenu={footerMenu}
					copyrightMenu={copyrightMenu}
					socialMenu={socialMenu}
				/>
			</body>
		</html>
	);
}
