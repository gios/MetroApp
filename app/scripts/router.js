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
			'arsenal': 'goArsenal',
			'bayern_munich': 'goBayernMunich',
			'barcelona': 'goBarcelona',
			'psg': 'goPSG',
			'real_madrid': 'goRealMadrid',
			'man_city': 'goManCity',
			'man_united': 'goManUnited',
			'milan': 'goMilan',
			'borussia_dortmund': 'goBorussiaDortmund',
			'tottenham': 'goTottenham',
			'newcastle': 'goNewcastle'
		}
	});

	return {
		Router: Router
	};
});