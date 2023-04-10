const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	reactStrictMode: true,
	// Enable automatic JSX runtime
	experimental: {
		automaticRuntimeImports: true,
	},
	webpack: (config) => {
		// modify webpack config here
		config.plugins.push(
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'public',
						to: '',
						globOptions: {
							ignore: ['**/index.html'],
						},
					},
				],
			})
		);

		return config;
	},
	env: {
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
	},
};
