import { dev } from "$app/environment";
import type { PageServerLoad } from "./$types";

export const prerender = true;
export const csr = dev; // For hot-module reloading

export const load = (async () => {
	const negatives = [
		"Not yet",
		"Be patient, child",
		"Nope",
		"You wish",
		"Maybe if you refresh this page‽",
		"Idk, check their Twitter",
		"Nah",
		"Impatient much?",
	];

	return {
		text: negatives[Math.floor(Math.random() * negatives.length)],
	};
}) satisfies PageServerLoad;
