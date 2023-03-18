<script lang="ts">
	import "./styles.css";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<main>
	<h1>Is Sally out yet?</h1>
	<p>{data.text}</p>
</main>

<footer>
	<p>
		Sally © <a href="https://www.lucid-tales.com/">Lucid Tales</a>. All rights
		reserved.
	</p>
</footer>

<style>
	main h1 {
		font-size: 1.25em;
		font-weight: 400;
	}

	main p {
		margin-top: 0.5em;
		font-size: 2em;
		font-weight: 700;
		color: var(--accent-color);
		transition: color 0.2s ease;
	}

	a {
		color: var(--link-color);
		text-decoration: underline;
		transition: color 0.2s ease;
	}

	a:hover {
		text-decoration: none;
	}

	footer {
		position: absolute;
		padding: 1em;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
