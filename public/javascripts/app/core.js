/**
 * @name Application
 * @desc The brain of the application
 */

define(['app/router', 'app/helpers'], function(Router) {

	var Application = new Marionette.Application();

	Application.addInitializer(function() {
		Application.router = new Router();
	});

	Application.addRegions({
		body       : "#region--body",
		modal      : "#region--modal",
		navigation : "#region--navigation"
	});

	Application.on('start', function() {
		Backbone.history.start({
			hashChange: false,
			pushState: true
		});
	});

	return Application;
});
