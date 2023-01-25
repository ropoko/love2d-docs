import fs from 'fs';

class Utils {
	static moduleExists(module) {
		const modules = fs.readdirSync('love-api/modules');
		return modules.includes(module);
	}
}

export default Utils;
