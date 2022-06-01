export function sanitize(input, config={upper:false, lower:false}) {
	let output = input.trim();
	if (config.lower)
		output = output.toLowerCase();
	if (config.upper)
		output = output.toUpperCase();
	return output;
}