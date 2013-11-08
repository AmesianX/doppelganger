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
			'form' : '.form--lobby',
			'room' : '.form--lobby [name=room_name]',
			'user' : '.form--lobby [name=user_name]'
		},

		joinRoom: function(e) {
			localStorage.setItem('user_name', this.ui.user.val());
			App.router.navigate(this.ui.room.val(), { trigger: true });
			e.preventDefault();
		},

		close: function() {
			this.$el.addClass('effect__fade-away');
			_.delay(Marionette.ItemView.prototype.close.bind(this), 500);
		}
	});
});
