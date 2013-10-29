/**
 * @name Halloween
 * @desc Trick or Treat!
 */

define([
	'app/core',
	'app/connection/core',
	'./views/scene'
], function(App, Connection, Scene) {
	var Halloween = App.module("Halloween", function() {
		this.startWithParent = false;
	});

	var scene = new Scene({
		collection: App.Connection.collection
	})

	Halloween.addInitializer(function() {
		App.body.show(scene);
	});

	Halloween.on('start', function() {
		scene.parallax();
	});

	Halloween.on('stop', function() {
		scene.deparallax();
	});

	return Halloween;
});
