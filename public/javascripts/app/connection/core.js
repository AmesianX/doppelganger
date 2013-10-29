/**
 * @name Connections
 * @desc The interface between clients, socket.io, and STUN
 */

define([
	'app/core',
	'./controllers/webrtc'
], function(App, Controller) {

	var Connection = App.module("Connection", function() {
		this.controller = new Controller();
		this.startWithParent = false;
	});

	var controller = Connection.controller;

	Connection.on('start', function() {
		controller.connect();
	});

	Connection.on('stop', function() {
		controller.disconnect();
	});

	App.reqres.setHandler('connection:supported', function() {
		return !!navigator.mozGetUserMedia || !!navigator.getUserMedia;
	});

	App.reqres.setHandler('connection:streams', function() {
		return controller.collection;
	});

	App.commands.setHandler('connection:mute', function() {
		controller.driver.mute();
	});

	App.commands.setHandler('connection:unmute', function() {
		controller.driver.unmute();
	});

	App.commands.setHandler('connection:pause', function() {
		controller.driver.pause();
	});

	App.commands.setHandler('connection:resume', function() {
		controller.driver.resume();
	});

	return Connection;
});
