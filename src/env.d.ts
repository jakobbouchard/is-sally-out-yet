/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly IS_RELEASED: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
