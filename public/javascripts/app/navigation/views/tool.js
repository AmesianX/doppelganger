define([
	'app/core',
	'hbars!../templates/tool'
], function(App, template) {

	return Marionette.ItemView.extend({
		tagName: 'li',
		template: template,

		events: {
			'click a' : 'onClick'
		},

		ui: {
			link: 'a'
		},

		onClick: function(e) {
			var isActive = this.ui.link.toggleClass('is-active').hasClass('is-active');
			App.execute(isActive? this.model.get('start') : this.model.get('stop'));
		}
	});
});
