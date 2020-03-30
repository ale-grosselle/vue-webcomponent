import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import requireContext from 'rollup-plugin-require-context';
import vue from 'rollup-plugin-vue';
import includePaths from 'rollup-plugin-includepaths';

const config = require('../package.json');
export default {
	input: 'src/index.js',
	plugins: [
		includePaths({
			paths: ["src"],
			external: []
		}),
		vue(),
		resolve({
			mainFields: ["module", "main", "browser"]
		}),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true,
		}),
		cjs(),
		requireContext(),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.BUILD),
			'VERSION': JSON.stringify(config.version),
		}),
	],
	watch: {
		include: 'src/**',
	}
}
