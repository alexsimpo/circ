const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

function getDirectories(rootDir, dir = '') {
	const targetDir = path.join(rootDir, dir);
	if (!fs.existsSync(targetDir)) {
		return {};
	}

	const folders = fs
		.readdirSync(targetDir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory() && dirent.name !== 'node_modules')
		.map((dirent) => dirent.name);

	const result = {};
	for (const folder of folders) {
		const fullPath = path.join(targetDir, folder);
		if (fullPath !== rootDir) {
			result[folder] = fullPath;
			const subDirs = getDirectories(rootDir, path.join(dir, folder));
			Object.assign(result, subDirs);
		}
	}
	return result;
}

module.exports = {
	reactStrictMode: true,
	// Enable automatic JSX runtime
	experimental: {
		automaticRuntimeImports: true,
		scrollRestoration: false,
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		const dirs = getDirectories(__dirname);
		for (const [alias, target] of Object.entries(dirs)) {
			config.resolve.alias[alias] = target;
		}

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
			},
		],
	},
	env: {
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
	},
};
