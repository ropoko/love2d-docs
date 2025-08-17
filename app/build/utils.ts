import fs from 'fs'

export default class Utils {
	static moduleExists(module: string) {
		const modules = fs.readdirSync('love-api/modules');
		return modules.includes(module);
	}

	static capitalize(text: string) {
		if (!text || text.length === 0 || text[0] === undefined) return '';

		const firstLetter = text[0];
		const restOfText = text.slice(1);

		return `${firstLetter.toUpperCase()}${restOfText}`;
	}
}
