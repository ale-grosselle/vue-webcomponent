// https://eslint.org/docs/user-guide/configuring
module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true
	},
	extends: ["standard", "plugin:vue/recommended"],
	// add your custom rules here
	rules: {
		'indent': [1, 'tab'],
		'semi': [2, 'always'],
		'no-tabs': 0,
		'quotes': ['error', 'double']
	}
};
