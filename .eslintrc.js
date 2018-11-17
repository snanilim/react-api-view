const path = require('path');

module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},

	rules: {
		'indent':'off',
		"react/jsx-indent": [4, 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
        'arrow-body-style': 'off',
	},
};