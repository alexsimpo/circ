import client from 'sanityClient';
import { Menus } from 'types';

export default async () => {
	const menus: Menus = await client.fetch(
		`
	*[_type == 'menu'][0]{
		headerMenu[]{
			label,
			url,
			reference->{
				_type,'slug': slug.current
		  	}
		},
		footerMenu[]{
			label,
			url,
			reference->{
				_type,'slug': slug.current
			}
		},
		copyrightMenu[]{
			label,
			url,
			reference->{
			  _type,'slug': slug.current
			}
		},
		socialMenu[]{
			label,
			url,
			reference->{
			  _type,'slug': slug.current
			}
		}
	  }
	  `,
		{ cache: 'no-store' }
	);
	return menus;
};
