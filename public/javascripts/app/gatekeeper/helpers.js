define(['Handlebars'], function(Handlebars) {

	Handlebars.registerHelper('share_twitter_url', function() {
		var tweet = 'Join me in Haunted Hills — it’s a scary-good time.';
		var link  = "http://twitter.com/home?status=" + tweet + ' ' + window.location;
		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('share_facebook_url', function() {
		var summary = 'I’m waiting for you in Haunted Hills — join me for a scary-good time.';
		var title = 'Join me in Haunted Hills';
		var image = window.location + '/images/halloween/fb.jpeg';

		var link = [
			"http://www.facebook.com/sharer/sharer.php?s=100&p[url]=",
			window.location,
			"&p[title]=",
			title,
			"&p[summary]=",
			summary,
			"&p[images][0]=",
			image
		].join('');

		return new Handlebars.SafeString(link);
	});

});
