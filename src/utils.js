import fs from 'fs'

class Utils {
	static moduleExists(module) {
		const modules = fs.readdirSync('love-api/modules');
		return modules.includes(module);
	}

	static capitalize(text) {
		return `${text[0].toUpperCase()}${text.slice(1)}`;
	}
}

export default Utils;
