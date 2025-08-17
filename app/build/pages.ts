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

	if (text.types().length > 0) {
		fileText += '\n\n ## Types';
	}

	text.types().forEach((type) => {
		fileText += `\n - ${type} \n`
	});

	fs.writeFileSync(`${modulePath}/page.mdx`, fileText);

	fileText = '';
});
