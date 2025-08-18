import fs from 'fs';
import Text from './text';
import Utils from './utils';

let fileText = '';

const pagesPath = `app/`;
const modules = fs.readdirSync('love-api/modules');

modules.map((mod) => {
	const modulePath = `${pagesPath}/${mod}`;

	fs.mkdir(modulePath, { recursive: false }, (err) => {
		if (err !== null) console.log('err appeared', mod, err);
	});

	const moduleCapitalized = Utils.capitalize(mod)

	fileText += `# ${moduleCapitalized} \n`

	const text = new Text(mod);

	fileText += text.description();

	const types = text.types();
	const functions = text.functions();
	const enums = text.enums();

	if (types.length > 0) {
		fileText += '\n\n ## Types';

		types.forEach((type) => {
			fileText += `\n - ${type} \n`
		});
	}

	if (functions.length > 0) {
		fileText += '\n\n ## Functions';

		functions.forEach((func) => {
			fileText += `\n - ${func} \n`
		});
	}

	if (enums.length > 0) {
		fileText += '\n\n ## Enums';

		enums.forEach((enumName) => {
			fileText += `\n - ${enumName} \n`
		});
	}

	fs.writeFileSync(`${modulePath}/page.mdx`, fileText);

	fileText = '';
});
