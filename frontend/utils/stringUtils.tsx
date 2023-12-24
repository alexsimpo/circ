import { Fragment } from 'react';

export const nl2br = (str: string) => {
	if (typeof str !== 'string') return str;
	const lines = str.split('\n');
	return (
		<>
			{lines.map((line, index) => (
				<Fragment key={index}>
					{line}
					{index < lines.length - 1 && <br />}
				</Fragment>
			))}
		</>
	);
};

export const formatDate = (dateStr: string) => {
	// DD/MM/YY format
	const date = new Date(dateStr);
	const formattedDate = date.toLocaleDateString('en-GB'); // Use 'en-US' for US format
	return formattedDate;
};

export const slugify = (str: string) => {
	str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
	str = str.toLowerCase(); // convert string to lowercase
	str = str
		.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
	return str;
};
