import fs from 'fs';
import Utils from './utils.js';

// const fs = require('fs')
// const Utils = require('./utils')

class Text {
	_module = '';

	luaFile = '';

	constructor(module) {
		if (Utils.moduleExists(module)) {
			this._module = module;

			const moduleCapitalized = module[0].toUpperCase() + module.slice(1);

			this.luaFile = fs.readFileSync(`love-api/modules/${module}/${moduleCapitalized}.lua`).toString();
		}
		else
			throw Error('Module not valid');
	}

	description() {
		// get the text after "description = '" until the first "."
		const rgxDescription = /(?<=description\s=\s')[^.]*/;
		const desc = rgxDescription.exec(this.luaFile);

		return desc[0];
	}
}

export default Text;
