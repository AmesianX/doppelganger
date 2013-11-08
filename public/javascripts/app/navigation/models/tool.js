/**
 * @name Tool
 * @desc A registerable action for the navigation bar
 */

define(function() {
	return Backbone.Model.extend({
		defaults: {
			name: 'tool',
			icon: '+',
			description: "A tool"
		}
	});
});
