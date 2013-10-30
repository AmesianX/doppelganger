/**
 * @name Connections
 * @desc The interface between clients, socket.io, and STUN
 */

define([
	'app/core',
	(!!window.webkitRTCPeerConnection || !!window.mozRTCPeerConnection || !!window.RTCPeerConnection? './controllers/webrtc' : './controllers/fallback')
], function(App, Controller) {

	var Connection = App.module("Connection", function() {
		this.startWithParent = false;
		this.controller = new Controller();
	});

	var controller = Connection.controller;

	Connection.on('start', function() {
		controller.connect();
	});

	Connection.on('stop', function() {
		_.result(controller, 'disconnect');
	});

	App.reqres.setHandler('connection:supported', function() {
		return !!navigator.mozGetUserMedia || !!navigator.getUserMedia;
	});

	App.reqres.setHandler('connection:streams', function() {
		return controller.collection;
	});

	App.commands.setHandler('connection:mute', function() {
		controller.mute();
	});

	App.commands.setHandler('connection:unmute', function() {
		controller.unmute();
	});

	App.commands.setHandler('connection:pause', function() {
		controller.pause();
	});

	App.commands.setHandler('connection:resume', function() {
		controller.resume();
	});

	return Connection;
});
