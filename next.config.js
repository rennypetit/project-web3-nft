/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false
            }
        }

        return config;
    },
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
	},
	env: {
		ETHEREUM_NETWORK: process.env.ETHEREUM_NETWORK,
		INFURA_API_KEY: process.env.INFURA_API_KEY
	}
};