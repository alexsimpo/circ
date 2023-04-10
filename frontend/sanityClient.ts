import { createClient } from 'next-sanity';

const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-04-08',
	useCdn: false,
});

export default client;
