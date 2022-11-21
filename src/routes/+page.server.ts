export async function load() {
	const negatives = [
		'Not yet',
		'Be patient, child',
		'Nope',
		'You wish',
		'Maybe if you refresh this page?',
		'Idk, check their Twitter',
		'Nah',
		'Impatient much?'
	];

	return {
		text: negatives[Math.floor(Math.random() * negatives.length)]
	};
}
