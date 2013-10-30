/**
 * @name Setup
 */

require([
	'app/core',
	'app/connection/core',
	'app/navigation/core',
	'app/scene/core',
	'app/gatekeeper/core',
	'app/messenger/core'
], function(App) {
	App.start();
});
