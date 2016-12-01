# Gearbox Design - ESLint

These rules dictate the JavaScript linting standards endorsed by [Gearbox Design](http://www.gearboxdesign.co.uk).

## Installation

1. Install Node dependencies

		npm install / yarn install

## Usage

1. Ensure an initial .eslintrc.js exists in the target directory with appropriate configuration options:
	
	**Example '.eslintrc.js'**
	```javascript
	module.exports = {
		'extends': [
			'gearbox-eslint',
			// Additional rule sets...
			'gearbox-eslint/rules/es6'
		].map(require.resolve),
		'env': {
			// Environment settings...
			'browser': true
		},
		// Local override rules...
		'rules': {}
	};
	``` 
2. Run eslint standalone (provided eslint is installed globally) with:

		eslint <DIRECTORY>

Or via other workflow tooling designed to interface with the eslint API.

### Links

- [ESLint Documentation](http://eslint.org/)