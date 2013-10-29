/**
 * @name Information
 * @desc Displays build information for the app
 */

define(['hbars!../templates/information'], function(template) {
	return Marionette.ItemView.extend({
		className: 'modal',

		template: template,

		events: {
			'click': 'handleModalClick'
		},

		ui: {
			'menu' : '.menu'
		},

		remove: function() {
			this.ui.menu.addClass('effect__fade-away');
			setTimeout(Marionette.ItemView.prototype.remove.bind(this), 700);
		},

		handleModalClick: function(e) {
			if (e.target == this.el) this.remove();
		}
	});
});
