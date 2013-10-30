/**
 * @name Visitor
 * @desc Displays build information for the app
 */

define(['hbars!../templates/visitor'], function(template) {
	return Marionette.ItemView.extend({
		className: 'modal',

		template: template,

		events: {
			'click': 'handleModalClick',
			'click .btn': 'remove'
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
