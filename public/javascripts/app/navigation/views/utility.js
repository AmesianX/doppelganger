/**
 * @name Utility
 * @extends Marionette.ItemView
 */

define([
	'app/core',
	'hbars!../templates/utility'
], function(App, template) {
	return Marionette.ItemView.extend({
		template: template,

		events: {
			'click .actionbar__nav__control--mute': 'toggleMute',
			'click .actionbar__nav__control--pause': 'togglePause',
			'click .actionbar__nav__control--chat': 'toggleChat',
			'click .actionbar__logo' : 'visitLobby'
		},

		ui: {
			mute: '.actionbar__nav__control--mute',
			pause: '.actionbar__nav__control--pause',
			chat: '.actionbar__nav__control--chat'
		},

		toggleChat: function() {
			var isActive = this.ui.chat.toggleClass('is-active').hasClass('is-active');
			$("body").toggleClass('show-chat', isActive);
		},

		toggleMute: function() {
			var isActive = this.ui.mute.toggleClass('is-active').hasClass('is-active');
			var action = isActive? 'mute' : 'unmute';

			App.execute('connection:' + action);
		},

		togglePause: function() {
			var isActive = this.ui.pause.toggleClass('is-active').hasClass('is-active');
			var action = isActive? 'pause' : 'resume';
			App.execute('connection:' + action);
		},

		visitLobby: function(e) {
			App.router.navigate('', { trigger: true });
			e.preventDefault();
		}
	});
});
