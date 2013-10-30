/**
 * @name Application
 * @desc The brain of the application
 */

define(['app/router'], function(Router) {

	var Application = new Marionette.Application();

	Application.addInitializer(function() {
		Application.router = new Router();
	});

	Application.addRegions({
		body       : "#region--body",
		navigation : "#region--navigation",
		modal      : "#region--modal",
		sidebar    : "#region--sidebar"
	});

	Application.on('start', function() {
		Backbone.history.start({
			hashChange: false,
			pushState: true
		});
	});

	return Application;
});
