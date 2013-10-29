/**
 * @name Utility
 * @extends Marionette.ItemView
 */

define([
	'app/core',
	'./information',
	'hbars!../templates/utility'
], function(App, Info, template) {
	return Marionette.ItemView.extend({
		template: template,

		events: {
			'click .actionbar__nav__control--mute': 'toggleMute',
			'click .actionbar__nav__control--pause': 'togglePause',
			'click .actionbar__nav__control--info': 'showInfo',
			'click .actionbar__logo' : 'visitLobby'
		},

		ui: {
			mute: '.actionbar__nav__control--mute',
			pause: '.actionbar__nav__control--pause'
		},

		toggleMute: function(e) {
			var isActive = this.ui.mute.toggleClass('is-active').hasClass('is-active');
			var action = isActive? 'mute' : 'unmute';

			App.execute('connection:' + action);

			e.preventDefault();
		},

		togglePause: function(e) {
			var isActive = this.ui.pause.toggleClass('is-active').hasClass('is-active');
			var action = isActive? 'pause' : 'resume';

			App.execute('connection:' + action);

			e.preventDefault();
		},

		serializeData: function() {
			return {
				hasWebRTC: App.request('connection:supported'),
				url: window.location,
				summary: 'I’m waiting for you in Haunted Hills — join me for a scary-good time.',
				title: 'Join me in Haunted Hills',
				image: window.location + '/images/halloween/fb.jpeg',
				tweet: 'Join me in Haunted Hills — it’s a scary-good time.'
			};
		},

		showInfo: function(e) {
			App.modal.show(new Info());

			e.preventDefault();
		},

		visitLobby: function(e) {
			App.router.navigate('', { trigger: true });

			e.preventDefault();
		}
	});
});
