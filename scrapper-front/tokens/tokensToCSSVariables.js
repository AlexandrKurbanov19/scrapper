const fs = require('fs');
const path = require('path');
const os = require('os');

const lightThemeTokens = require('./light.json');

const output = path.resolve(__dirname, '_lms-variables.scss');

const cssVars = [];

cssVars.push(`// autogenerated${os.EOL}`);
cssVars.push(`// CSS variables from figma Design tokens${os.EOL}${os.EOL}`);

cssVars.push(`:root {${os.EOL}`)

for (let prop in lightThemeTokens) {
	const propWithoutDots = prop.split('.').join('-');

	cssVars.push(`  --lms-${propWithoutDots}: ${lightThemeTokens[prop]};${os.EOL}`);
}

cssVars.push(`}${os.EOL}`);

fs.writeFile(output, cssVars.join(''), (err) => {
	if (err) throw err;
	console.log(`CSS variables for light theme created!`);
});

