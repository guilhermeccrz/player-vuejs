
// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
	baseUrl:'js/libs',

	paths: {
		main: '../main',
		jquery: 'jquery.min',
		underscore: 'underscore-min',
		backbone: 'backbone-min'
	},

	shim: {
		jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
	}
});
// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);