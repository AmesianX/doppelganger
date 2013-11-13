/**
 * @name Messenger Tools
 */

define(['app/utilitybelt/core'], function(Belt) {
	Belt.register({
		name: 'chat',
		icon: '&#xe600;',
		description: 'Chat',
		start: 'messenger:open',
		stop: 'messenger:close'
	});
});
