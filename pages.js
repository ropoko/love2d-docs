import fs from 'fs';
import Text from './text.js';

// const fs = require('fs')
// const Text = require('./text')

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

			const mod_capitalize = mod[0].toUpperCase() + mod.slice(1);

			fileText += `# ${mod_capitalize} \n`

			const text = new Text(mod);

			fileText += text.description();

			fs.writeFileSync(`pages/${mod}.mdx`, fileText);

			// clean
			fileText = '';
		});
	}
}

Pages();

// export default Pages;
