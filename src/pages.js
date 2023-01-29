import fs from 'fs';
import Text from './text.js';

import Utils from './utils.js';

let fileText = '';

// Create the pages for each module following the love-api docs
const Pages = () => {
	// check if the first one exists
	const modulesExist = fs.existsSync('pages/audio');

	if (!modulesExist) {
		const modules = fs.readdirSync('love-api/modules');

		modules.map((mod) => {
			fs.mkdir(`pages/${mod}`, { recursive: false }, (err) => {
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

			fs.writeFileSync(`pages/${mod}.mdx`, fileText);

			// clean
			fileText = '';
		});
	}
}

Pages();
