/**
 * @name Scene
 * @desc The main presentation logic
 */

define([
	'app/core',
	'./views/visitor',
	'./views/utility'
], function(App, Visitor, Utility) {
	var Navigation = App.module("Navigation", function() {
		this.startWithParent = false;

		if (App.request("connection:supported") && window.location.pathname.length > 2) {
			App.modal.show(new Visitor());
		}
	});

	Navigation.on('start', function() {
		App.navigation.show(new Utility());
	});

 	Navigation.on('stop', function() {
		App.navigation.reset();
	});

	return Navigation;
});
