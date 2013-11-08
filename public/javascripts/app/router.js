define(function() {
    return Backbone.Router.extend({

		routes: {
			''      : 'index',
			':room' : 'room'
		},

		index: function() {
			var App = require('app/core');

			App.Connection.stop();
			App.Navigation.stop();
			App.Messenger.stop();

			App.Gatekeeper.start();
		},

		room: function(room) {
			var App = require('app/core');

			App.Gatekeeper.stop();

			App.Messenger.start();
			App.Navigation.start();
			App.Connection.start();
		}
	});
});
