/**
 * @name Tools
 * @desc A list of registerable actions
 */

define([
	'../models/tool'
], function(Tool) {
	return Backbone.Collection.extend({
		model: Tool
	});
});
