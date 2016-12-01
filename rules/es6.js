/* eslint-disable no-magic-numbers */
'use strict';

module.exports = {
	'env': {
		'es6': false
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
			'experimentalObjectRestSpread': true
		}
	},
	'globals': {
		'Promise': true,
		'Symbol': true
	},
	'rules': {
		'strict': [2, 'never'],
		'arrow-body-style': [1, 'always'],
		'arrow-parens': [1, 'always'],
		'arrow-spacing': [1, {
			'before': true,
			'after': true
		}],
		'constructor-super': 2, // <- Styleguide progress
		'generator-star-spacing': [1, {
			'before': false,
			'after': true
		}],
		'no-class-assign': 2,
		'no-confusing-arrow': 2,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-imports': 2,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-this-before-super': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-rename': 2,
		'no-var': 1,
		'object-shorthand': 1,
		'prefer-arrow-callback': 1,
		'prefer-const': 1,
		'prefer-numeric-literals': 0,
		'prefer-rest-params': 1,
		'prefer-spread': 1,
		'prefer-template': 1,
		'require-yield': 0,
		'rest-spread-spacing': [1, 'never'],
		'sort-imports': 0,
		'symbol-description': 1,
		'template-curly-spacing': [1, 'always'],
		'yield-star-spacing': [1, 'before']
	}
};

/* eslint-enable */