define(['Handlebars'], function(Handlebars) {

	Handlebars.registerHelper('link_to_help', function(text) {
		var link = "<a href='mailto:ben.eckerson@viget.com'>" + text + "</a>";
		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_chrome', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'Chrome';
		}

		var url = "https://www.google.com/intl/en/chrome/browser/";
		var link = "<a target='_blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_firefox', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'Firefox';
		}

		var url = "http://www.mozilla.org/en-US/firefox/new/";
		var link = "<a target=_'blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_pointless', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'Pointless Corp';
		}

		var url = "https://pointlesscorp.com";
		var link = "<a target=_'blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_viget', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'Viget';
		}

		var url = "https://viget.com";
		var link = "<a target=_'blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_doppelganger', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'Doppelganger';
		}

		var url = "https://github.com/vigetlabs/doppelganger";
		var link = "<a target=_'blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_webrtc', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'WebRTC';
		}

		var url = "http://www.webrtc.org/";
		var link = "<a target=_'blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('link_to_parallax', function(text) {
		if (_.isObject(text) && text.fn) {
			text = text.fn();
		} else {
			text = 'Parallax.js';
		}

		var url = "http://wagerfield.github.io/parallax/";
		var link = "<a target=_'blank' href='" + url + "'>" + text + "</a>";

		return new Handlebars.SafeString(link);
	});

});
