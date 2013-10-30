/**
 * @name Share
 * @desc Displays build information for the app
 */

define([
	'app/core',
	'hbars!../templates/share'
], function(App, template) {
	return Marionette.ItemView.extend({
		className: 'modal',

		template: template,

		events: {
			'click': 'handleModalClick',
			'click .menu__close': 'remove'
		},

		ui: {
			'menu' : '.menu'
		},

		onDomRefresh: function() {
			setTimeout(function(){
				this.ui.menu.addClass('is-flipped');
			}.bind(this), 900);
		},

		serializeData: function() {
			return {
				location: window.location,
				hasWebRTC: App.request("connection:supported")
			};
		},

		handleModalClick: function(e) {
			if (e.target == this.el) this.remove();
		}
	});
});
