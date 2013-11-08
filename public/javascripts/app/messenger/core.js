/**
 * @name Messenger
 * @desc A chat app for Doppleganger
 */

define([
	'app/core',
	'./views/conversation',
	'./tools'
], function(App, Conversation) {

	var Messenger = App.module("Messenger", function() {
		this.startWithParent = true;
	});

	App.commands.setHandler('messenger:open', function() {
		$("body").addClass('show-chat');
	});

	App.commands.setHandler('messenger:close', function() {
		$("body").removeClass('show-chat');
	});

	Messenger.on('start', function() {
		App.sidebar.show(new Conversation({
			collection: App.request('connection:log')
		}));
	});

	Messenger.on('stop', function() {
		App.sidebar.reset();
	});

	return Messenger;
});
