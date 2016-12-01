/* eslint-disable no-magic-numbers */
'use strict';

module.exports = {
	'rules': {
		'array-bracket-spacing': [1, 'never'],
		'block-spacing': [1, 'always'],
		'brace-style': [1, 'stroustrup', {
			'allowSingleLine': true
		}],
		'camelcase': [1, {
			'properties': 'never'
		}],
		'comma-dangle': [2, 'never'],
		'comma-spacing': [1, {
			'before': false,
			'after': true
		}],
		'comma-style': [1, 'last'],
		'computed-property-spacing': [1, 'never'],
		'consistent-this': 2,
		'eol-last': 0,
		'func-call-spacing': [1, 'never'],
		'func-name-matching': 2,
		'func-names': 2,
		'func-style': [1, 'declaration', {
			'allowArrowFunctions': true
		}],
		'id-blacklist': 0,
		'id-length': [1, { exceptions: ['x', 'y', 'z', 'i', '_'] }],
		'id-match': 0,
		'indent': [1, 'tab'],
		'jsx-quotes': [1, 'prefer-double'],
		'key-spacing': [1, {
			'beforeColon': false,
			'afterColon': true
		}],
		'keyword-spacing': 1,
		'line-comment-position': 0,
		'linebreak-style': 0,
		'lines-around-comment': 1,
		'lines-around-directive': 0,
		'max-depth': [1, 4],
		'max-len': [1, 120, 4, { ignoreUrls: true }],
		'max-lines': 0,
		'max-nested-callbacks': [1, 4],
		'max-params': [1, 4],
		'max-statements-per-line': 0,
		'max-statements': 0,
		'multiline-ternary': 0,
		'new-cap': [2, {
			'newIsCap': true
		}],
		'new-parens': 2,
		'newline-after-var': 0,
		'newline-before-return': 1,
		'newline-per-chained-call': 0,
		'no-array-constructor': 2,
		'no-bitwise': 0,
		'no-continue': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 1,
		'no-mixed-operators': 1,
		'no-mixed-spaces-and-tabs': 1,
		'no-multiple-empty-lines': [1, {
			'max': 2,
			'maxEOF': 1
		}],
		'no-negated-condition': 0,
		'no-nested-ternary': 0,
		'no-new-object': 2,
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'no-tabs': 0,
		'no-ternary': 0,
		'no-trailing-spaces': 1,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 2,
		'no-whitespace-before-property': 1,
		'object-curly-newline': 0,
		'object-curly-spacing': [1, 'always'],
		'object-property-newline': 1,
		'one-var-declaration-per-line': [1, 'always'],
		'one-var': 0,
		'operator-assignment': 0,
		'operator-linebreak': [1, 'after'],
		'padded-blocks': 0,
		'quote-props': 0,
		'quotes': [1, 'single', 'avoid-escape'],
		'require-jsdoc': 0,
		'semi-spacing': [1, {
			'before': false,
			'after': true
		}],
		'semi': [2, 'always'],
		'sort-keys': 0,
		'sort-vars': 0,
		'space-before-blocks': [1, 'always'],
		'space-before-function-paren': [1, 'always'],
		'space-in-parens': [1, 'never'],
		'space-infix-ops': 1,
		'space-unary-ops': [1, {
			'words': true,
			'nonwords': false
		}],
		'spaced-comment': [1, 'always'],
		'unicode-bom': 0,
		'wrap-regex': 0
	}
};

/* eslint-enable */