/* MetroApp
 * version: 0.2.0
 * Router
 */

'use strict'

define('router', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	// Globar Router
	var Router = Backbone.Router.extend({

		routes: {
			'chelsea': 'goChelsea',
			'arsenal': '',
			'bayern_munich': '',
			'barcelona': '',
			'psg': '',
			'real_madrid': '',
			'man_city': '',
			'man_united': '',
			'milan': '',
			'borussia_dortmund': '',
			'tottenham': '',
			'newcastle': ''
		},

		goChelsea: function() {
			console.log('Chelsea');
		}
	});

	return {
		Router: Router
	};
});