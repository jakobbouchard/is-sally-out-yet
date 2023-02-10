/** @type {import('prettier').Config} */
module.exports = {
	trailingComma: "all",
	plugins: ["prettier-plugin-svelte"],
	pluginSearchDirs: ["."],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
