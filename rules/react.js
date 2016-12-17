/* eslint-disable no-magic-numbers */
'use strict';

// TODO: Styleguide
module.exports = {
	'plugins': [
		'react'
	],
	'rules': {
		'new-cap': 0,
		'react/display-name': 0,
		'react/forbid-component-props': 0,
		'react/forbid-prop-types': 0,
		'react/no-children-prop': 2,
		'react/no-danger': 1,
		'react/no-danger-with-children': 2,
		'react/no-deprecated': 2,
		'react/no-did-mount-set-state': 1,
		'react/no-did-update-set-state': 1,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-multi-comp': [2, { 'ignoreStateless': true }],
		'react/no-render-return-value': 2,
		'react/no-set-state': 0,
		'react/no-string-refs': 2,
		'react/no-unescaped-entities': 2,
		'react/no-unknown-property': 2,
		'react/no-unused-prop-types': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 2,
		'react/prop-types': 2,
		'react/react-in-jsx-scope': 2,
		'react/require-optimization': 1,
		'react/require-render-return': 2,
		'react/self-closing-comp': 1,
		'react/sort-comp': [1, {
			'order': [
				'static-methods',
				'lifecycle',
				'everything-else',
				'/^.+Handler$/',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'/^render.+$/',
				'render'
			]
		}],
		'react/sort-prop-types': [1, {
			callbacksLast: false,
			ignoreCase: true,
			requiredFirst: false
		}],
		'react/style-prop-object': 2,
		'react/jsx-boolean-value': 0,
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-curly-spacing': [1, 'always'],
		'react/jsx-equals-spacing': [1, 'never'],
		'react/jsx-filename-extension': 0,
		'react/jsx-first-prop-new-line': [1, 'multiline'],
		'react/jsx-handler-names': 0,
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-key': 2,
		'react/jsx-max-props-per-line': 1,
		'react/jsx-no-bind': 1,
		'react/jsx-no-comment-textnodes': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-literals': 0,
		'react/jsx-no-target-blank': 2,

		'react/jsx-no-undef': 2,
		'react/jsx-pascal-case': 2,
		'react/jsx-sort-props': [1, {
			'callbacksLast': false,
			'shorthandFirst': false,
			'ignoreCase': true
		}],
		'react/jsx-space-before-closing': [1, 'always'],
		'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/jsx-wrap-multilines': 1
	}
};

/* eslint-enable */