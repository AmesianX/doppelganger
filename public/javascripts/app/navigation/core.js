/**
 * @name Navigation
 * @desc The main presentation logic
 */

define([
	'app/core',
	'./collections/tools',
	'./views/utility'
], function(App, Tools, Utility) {
	var Navigation = App.module("Navigation", function() {
		this.startWithParent = false;
		this.tools = new Tools([]);
	});

	Navigation.on('start', function() {
		App.navigation.show(new Utility({
			collection: this.tools
		}));
	});

 	Navigation.on('stop', function() {
		App.navigation.reset();
	});

	Navigation.register = function(tool) {
		this.tools.add(tool);
	};

	return Navigation;
});
