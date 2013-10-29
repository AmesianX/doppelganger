/**
 * @name Lobby
 * @extends Marionette.ItemView
 */

define([
	'app/core',
	'hbars!../templates/lobby',
	'app/gatekeeper/lib/uuid'
], function(App, template) {
	return Marionette.ItemView.extend({
		className : 'modal',
		template  : template,

		events    : {
			'submit form' : 'joinRoom'
		},

		ui: {
			'menu' : '.menu',
			'form' : '.form--lobby'
		},

		serializeData: function() {
			return {
				uuid: Math.uuid(8)
			};
		},

		onDomRefresh: function() {
			_.delay(function() {
				this.ui.menu.addClass('is-flipped');
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
