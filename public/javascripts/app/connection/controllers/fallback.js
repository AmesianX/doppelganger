/**
 * @name Fallback
 * @extends Marionette.Controller
 */

define([
	'app/core',
	'app/connection/collections/streams'
], function(App, Streams) {

	return Marionette.Controller.extend({

		initialize: function() {
			var collection = this.collection = new Streams();

			this.driver = {};

			_(['connect', 'localVideo', 'mute', 'unmute', 'pause', 'resume']).each(function(action) {
				this[action] = function() {};
			}, this);
		},

		disconnect: function() {
			this.collection.reset();
		}
	});
});
