module.exports = {
	// Run Svelte check on whole project
	"*.svelte": () => "pnpm check",
	// Run TypeScript check on whole project
	"*.ts": () => "tsc --noEmit",
	// Run ESLint on TS files
	"*.ts": "eslint --cache --fix",
	// Run Prettier everywhere
	"*": "prettier --cache --write --ignore-unknown",
};
