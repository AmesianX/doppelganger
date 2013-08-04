/**
 * @name Connections
 */

define([
	'application',
	'./views/scene'
], function(App, Scene) {
	var Presentation = App.module("Presentation");

	Presentation.addInitializer(function() {
		App.main.show(new Scene({
			collection: App.request('connection:streams')
		}));
	});

	return Presentation;
});