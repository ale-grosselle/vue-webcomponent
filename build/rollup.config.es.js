import base from './rollup.config.base';

const packageJson = require('../package.json');
const config = Object.assign({}, base, {
	output: {
		name: 'vueWc',
		file: packageJson.module,
		format: 'es',
	}
});

export default config;
