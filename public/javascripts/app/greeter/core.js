/**
 * @name Greeter
 * @desc The main presentation logic
 */

define([
	'app/core',
	'./views/share'
], function(App, Share) {

	var Greeter = App.module("Greeter", function() {
		this.startWithParent = false;
	});

	Greeter.on('start', function() {
		App.modal.show(new Share());
	});

 	Greeter.on('stop', function() {
		App.model.reset();
	});

	return Greeter;
});
