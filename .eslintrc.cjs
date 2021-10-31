module.exports = {
	root: true,
	extends: ["eslint:recommended", "prettier"],
	plugins: ["svelte3"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	parser: "babel-eslint",
	parserOptions: {
		extends: "standard",
		sourceType: "module",
		ecmaVersion: 2019,
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
