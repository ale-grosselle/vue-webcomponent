import base from './rollup.config.base';
import { terser } from 'rollup-plugin-terser';
const packageJson = require('../package.json');

const config = Object.assign({}, base, {
	output: {
		exports: 'named',
		name: 'vueWc',
		file: packageJson.browser,
		format: 'umd',
	},
});

if (process.env.BUILD === "production") {
	config.plugins.push(terser());
}

export default config;
