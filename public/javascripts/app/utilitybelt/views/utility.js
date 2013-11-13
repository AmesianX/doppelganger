/**
 * @name Utility
 * @extends Marionette.ItemView
 */

define([
	'app/core',
	'./tool',
	'hbars!../templates/utility'
], function(App, Tool, template) {
	return Marionette.CompositeView.extend({
		template: template,
		itemView: Tool,
		itemViewContainer: '.actionbar__nav',

		events: {
			'click .actionbar__logo' : 'visitLobby'
		},

		visitLobby: function(e) {
			App.router.navigate('', { trigger: true });
			e.preventDefault();
		}
	});
});
