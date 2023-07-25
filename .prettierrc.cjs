/** @type {import('prettier').Config} */
module.exports = {
	trailingComma: "all",
	plugins: ["prettier-plugin-svelte"],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
