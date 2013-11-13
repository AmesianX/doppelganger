/**
 * @name Setup
 */

require([
	'app/core',
	'app/connection/core',
	'app/utilitybelt/core',
	'app/scene/core',
	'app/gatekeeper/core',
	'app/messenger/core'
], function(App) {
	App.start();
});
