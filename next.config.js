/** @type {import('next').NextConfig} */
module.exports = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		domains: [
			'raw.githubusercontent.com',
			'avatars.githubusercontent.com'
		]
	}
};
