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
			'submit form' : 'joinRoom',
			'click .menu__close' : 'close',
			'click .js-skip' : 'close'
		},

		ui: {
			'menu' : '.menu',
			'form' : '.form--lobby'
		},

		serializeData: function() {
			return {
				hasWebRTC: App.request('connection:supported'),
				location: window.location.protocol + '//' + window.location.host,
				uuid: Math.uuid(8)
			};
		},

		joinRoom: function(e) {
			var room = this.ui.form[0]['room_name'].value;
			App.router.navigate(room, { trigger: true });
			e.preventDefault();
		}
	});
});
