import fs from 'fs';
import Utils from './utils';

export default class Text {
	_module = '';

	luaFile = '';

	constructor(module: string) {
		if (Utils.moduleExists(module)) {
			this._module = module;

			const moduleCapitalized = Utils.capitalize(module);

			this.luaFile = fs.readFileSync(`love-api/modules/${module}/${moduleCapitalized}.lua`).toString();
		}
		else
			throw Error('Module not valid');
	}

	description() {
		// get the text after "description = '" until the first "."
		const rgxDescription = /(?<=description\s=\s')[^.]*/;
		const desc = rgxDescription.exec(this.luaFile);

		return desc?.[0];
	}

	types() {
		const typesExist = fs.existsSync(`love-api/modules/${this._module}/types`);

		if (typesExist) {
			const types = fs.readdirSync(`love-api/modules/${this._module}/types`);

			const titleTypes: string[] = [];

			types.forEach((type) => {
				titleTypes.push(Utils.capitalize(type));
			});

			return titleTypes;
		}

		return [];
	}
}
