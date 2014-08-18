/* MetroApp
 * version: 0.2.0
 * Model
 */

'use strict'

define('model', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	var Club = Backbone.Model.extend({
		defaults: {
			name: "None",
			image: "/none",
			rank: 0,
			url: "#"
		}
	});

	var Progress = Backbone.Model.extend({
		defaults: {
			value: 0
		}
	});

	return {
		Club: Club,
		Progress: Progress
	};
});