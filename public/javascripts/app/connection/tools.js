/**
 * @name Connection Tools
 */

define(['app/utilitybelt/core'], function(Belt) {
	Belt.register({
		name: 'mute',
		icon: '&#xe602;',
		description: 'Mute Microphone',
		start: 'connection:mute',
		stop: 'connection:unmute'
	});

	Belt.register({
		name: 'pause',
		icon: '&#xe603;',
		description: 'Pause Video',
		start: 'connection:pause',
		stop: 'connection:resume'
	});
});
