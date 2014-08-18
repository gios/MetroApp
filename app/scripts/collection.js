/* MetroApp
 * version: 0.2.0
 * Collection
 */

 'use strict'

 define('collection', ['jquery', 'underscore', 'backbone', 'model'], function($, _, Backbone, Model) {

 	var ClubCollection = Backbone.Collection.extend({
 		model: Model.Club
 	});

 	return {
 		ClubCollection: ClubCollection
 	};
 });