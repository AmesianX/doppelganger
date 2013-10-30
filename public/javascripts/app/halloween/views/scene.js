define([
	'vendor/jquery.parallax'
], function(template) {
	return Marionette.ItemView.extend({
        className: 'scene halloween__scene',
        tagName: 'ul',

		ui: {
			layers   : '.layer',
			masks    : '.mask',
			canvases : 'canvas'
		},

		initialize: function() {
			$(window).on('resize.scene', this.resize.bind(this));
			this.bindUIElements();
			this.resize();
			this.$el.parallax();
		},

		resize: _.throttle(function() {
			var totalHeight = window.innerHeight - $("#region--footer").height();

			this.$el.width(window.innerWidth);
			this.$el.height(totalHeight);
		}, 100),

		play: function() {
			this.videoLoop();
		},

		pause: function() {
			this.cancel();
		},

		serializeMask: function(model, maskWidth, maskHeight, zoom) {
			var attrs = model.toJSON();
			var video = attrs.videoEl;

			var scaleX = maskWidth / video.videoWidth;
			var scaleY = maskHeight / video.videoHeight;

			var scale = attrs.scale = Math.max(scaleX, scaleY) * zoom;

			var height = attrs.height = video.videoHeight * scale;
			var width = attrs.width = video.videoWidth * scale;

			attrs.x = (width - maskWidth) * 0.5;
			attrs.y = (height - maskHeight) * 0.5;

			return attrs;
		},

		draw: function() {
			this.collection.each(function(model, i) {
				var canvas = this.ui.canvases.get(i);
				var mask = this.ui.masks.get(i);
				var ctx = canvas.getContext('2d');

				var zoom = parseFloat(mask.getAttribute('data-zoom'), 10);
				var data = this.serializeMask(model, mask.width, mask.height, zoom);

				ctx.clearRect(0, 0, canvas.width, canvas.height);

				ctx.save();

				ctx.drawImage(data.videoEl, -data.x, -data.y, data.width, data.height);
				ctx.fillStyle = mask.getAttribute('data-hue');
				ctx.fillRect(0, 0, canvas.width, canvas.height);

				ctx.globalCompositeOperation = 'destination-in';
				ctx.drawImage(mask, 0, 0);

				ctx.restore();
			}, this);
		},

		cancel: function() {
			cancelAnimationFrame(this.frame);
		},

		videoLoop: function () {
			this.cancel();

			var last = Date.now();

			this.frame = requestAnimationFrame(function play() {
				var isStale = Date.now() - last > (1000/30);

				this.frame = requestAnimationFrame(play.bind(this));

				if (isStale) {
					last = Date.now();
					this.draw();
				}
			}.bind(this));
		}
	});
});
