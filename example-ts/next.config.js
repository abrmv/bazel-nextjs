const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
	//reactStrictMode: true,
	webpack: (config) => {
		// Handle issues with multiple react versions
		// https://reactjs.org/warnings/invalid-hook-call-warning.html
		config.resolve.alias = {
			...config.resolve.alias,
			react: path.resolve(
				path.join(process.env.RUNFILES, "npm", "node_modules", "react")
			),
			"react-dom": path.resolve(
				path.join(process.env.RUNFILES, "npm", "node_modules", "react-dom")
			),
        };
        return config;
    }
}

module.exports = nextConfig
