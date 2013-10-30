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
			form: '.conversation__form'
		},

		serializeData: function() {
			var items = _.where(this.collection.toJSON(), { type: 'chat' }).map(function(m) {
				m.payload.timestamp = parseInt(m.payload.timestamp);
				return m.payload;
			});

			return {
				items: _.sortBy(items, 'timestamp')
			};
		},

		sendMessage: function() {
			var message = this.ui.form[0]['message'];

			App.execute('send:chat', {
				timestamp: Date.now(),
				message: message.value
			});

 			message.value = '';

			$(message).focus();

			return false;
		}
	});
});
