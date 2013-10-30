define(function() {
    return Backbone.Router.extend({

		routes: {
			''      : 'index',
			':room' : 'room'
		},

		index: function() {
			var App = require('app/core');

			App.Connection.stop();
			App.Halloween.stop();
			App.Greeter.stop();
			App.Navigation.stop();

			App.Gatekeeper.start();
		},

		room: function(room) {
			var App = require('app/core');

			App.Gatekeeper.stop();

			App.Connection.start();
			App.Halloween.start();
			App.Navigation.start();
			App.Greeter.start();
		}
	});
});
