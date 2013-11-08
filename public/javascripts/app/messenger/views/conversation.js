/**
 * @name Conversation
 * @extends Marionette.ItemView
 */

define([
	'app/core',
	'hbars!../templates/conversation'
], function(App, template) {
	return Marionette.ItemView.extend({
		className : 'conversation',
		tagName   : 'div',
		template  : template,

		events: {
			'submit form': 'sendMessage'
		},

		collectionEvents: {
			'add:chat': 'render'
		},

		ui: {
			form: '.conversation__form',
			message: '.conversation__form [name=message]'
		},

		serializeData: function() {
			var items = _.where(this.collection.toJSON(), { type: 'chat' }).map(function(m) {
				m.payload.timestamp = parseInt(m.payload.timestamp);
				return m.payload;
			});

			return {
				username: 'Anonymous',
				items: _.sortBy(items, 'timestamp')
			};
		},

		sendMessage: function() {

			App.execute('send:chat', {
				username: '☺',
				timestamp: Date.now(),
				message: this.ui.message.val()
			});

 			this.ui.message.val('').focus();

			return false;
		}
	});
});
