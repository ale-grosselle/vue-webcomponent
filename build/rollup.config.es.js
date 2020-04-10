import base from './rollup.config.base';

const packageJson = require('../package.json');
const config = Object.assign({}, base, {
	output: {
		name: 'vComponents',
		file: packageJson.module,
		format: 'es',
	}
});

export default config;
