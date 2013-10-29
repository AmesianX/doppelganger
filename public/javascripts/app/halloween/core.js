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
		el: '.halloween__scene',
		collection: App.request('connection:streams')
	});

	Halloween.on('start', function() {
		scene.play();
	});

	Halloween.on('stop', function() {
		scene.pause();
	});

	return Halloween;
});
