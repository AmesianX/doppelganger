/**
 * @name Messenger Tools
 */

define(['app/navigation/core'], function(Nav) {
	Nav.register({
		name: 'chat',
		icon: '&#xe600;',
		description: 'Chat',
		start: 'messenger:open',
		stop: 'messenger:close'
	});
});
