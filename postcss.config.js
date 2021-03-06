var csso = require('postcss-csso')({ restructure: false });

const purgecss = require('@fullhuman/postcss-purgecss')({

	// Specify the paths to all of the template files in your project 
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
	],

	// Include any special characters you're using in this regular expression
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
	plugins: [
		require("postcss-import"),
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-extend'),
		...process.env.NODE_ENV === 'production' ? [purgecss,csso] : [],
	]
}