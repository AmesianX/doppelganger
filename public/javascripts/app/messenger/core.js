/**
 * @name Messenger
 * @desc A chat app for Doppleganger
 */

define([
	'app/core',
	'./views/conversation'
], function(App, Conversation) {

	var Messenger = App.module("Messenger", function() {
		this.startWithParent = true;
	});

	Messenger.on('start', function() {
		App.sidebar.show(new Conversation({
			collection: App.request('connection:log')
		}));
	});

	Messenger.on('stop', function() {
		App.modal.reset();
	});

	return Messenger;
});
