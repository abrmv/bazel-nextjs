module.exports = {
	webpack: (config) => {
		// Disable minification for faster build times
		config.optimization.minimize = false;
		return config;
	},
	typescript: {
		// Skip built-in typechecking in next.js for faster build times
		ignoreBuildErrors: true,
	},
	eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
