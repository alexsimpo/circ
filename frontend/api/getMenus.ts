import client from 'sanityClient';
import { Menus } from 'types';

export default async () => {
	const menus: Menus[] = await client.fetch(`
	*[_type == 'menu'][0]{
		headerMenu[]{
			label,
			url,
			'link': reference->{
				_type,'slug': slug.current
		  	}
		},
		footerMenu[]{
			label,
			url,
			'link': reference->{
				_type,'slug': slug.current
			}
		},
		copyright[]{
			label,
			url,
			'link': reference->{
			  _type,'slug': slug.current
			}
		},
		socialMenu[]{
			label,
			url,
			'link': reference->{
			  _type,'slug': slug.current
			}
		}
	  }
	  `);
	return menus;
};
