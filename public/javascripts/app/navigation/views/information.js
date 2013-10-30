/**
 * @name Information
 * @desc Displays build information for the app
 */

define(['hbars!../templates/information'], function(template) {
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

		handleModalClick: function(e) {
			if (e.target == this.el) this.remove();
		}
	});
});
