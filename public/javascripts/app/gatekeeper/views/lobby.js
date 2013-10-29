/**
 * @name Lobby
 * @extends Marionette.ItemView
 */

define([
	'app/core',
	'hbars!../templates/lobby'
], function(App, template) {
	return Marionette.ItemView.extend({
		className : 'menu modal',
		tagName   : 'menu',
		template  : template,

		events    : {
			'submit form' : 'joinRoom'
		},

		ui: {
			'form' : '.form--lobby'
		},

		onDomRefresh: function() {
			_.delay(function() {
				this.$el.addClass('is-flipped');
			}.bind(this), 1000);
		},

		joinRoom: function(e) {
			var room = this.ui.form[0]['room_name'].value;
			App.router.navigate(room, { trigger: true });
			e.preventDefault();
		},

		close: function() {
			this.$el.addClass('effect__fade-away');
			_.delay(Marionette.ItemView.prototype.close.bind(this), 500);
		}
	});
});
