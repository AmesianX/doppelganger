/**
 * @name Connection Tools
 */

define(['app/navigation/core'], function(Nav) {
	Nav.register({
		name: 'mute',
		icon: '&#xe602;',
		description: 'Mute Microphone',
		start: 'connection:mute',
		stop: 'connection:unmute'
	});

	Nav.register({
		name: 'pause',
		icon: '&#xe603;',
		description: 'Pause Video',
		start: 'connection:pause',
		stop: 'connection:resume'
	});
});
