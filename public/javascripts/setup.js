/**
 * @name Setup
 */

require([
	'app/core',
	'app/connection/core',
	'app/navigation/core',
	'app/halloween/core',
	'app/gatekeeper/core',
	'app/greeter/core'
], function(App) {
	App.start();
});
