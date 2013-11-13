/**
 * @name Utility Belt
 * @desc A registerable toolbar
 */

define([
	'app/core',
	'./collections/tools',
	'./views/utility'
], function(App, Tools, Utility) {
	var UtilityBelt = App.module("UtilityBelt", function() {
		this.startWithParent = false;
		this.tools = new Tools([]);
	});

	UtilityBelt.on('start', function() {
		App.navigation.show(new Utility({
			collection: this.tools
		}));
	});

 	UtilityBelt.on('stop', function() {
		App.navigation.reset();
	});

	UtilityBelt.register = function(tool) {
		this.tools.add(tool);
	};

	return UtilityBelt;
});
