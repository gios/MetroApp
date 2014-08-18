/* MetroApp
 * version: 0.2.0
 * View
 */

'use strict'

define('view', ['jquery', 'underscore', 'backbone', 'bootstrap'], function($, _, Backbone) {

	// Create element (div) for main area
	var $clubsArea = document.createElement('div');

	// General clubsView
	var ClubsView = Backbone.View.extend({
		tagName: $clubsArea,

		initialize: function() {
			$('body').append($clubsArea);
			$('body').find('div:last').attr('id', 'clubsArea');
		},

		render: function() {
			var clubsTable = "<div class='row'>"; // close </div>
			_.each(this.collection.models, function(m) {
				clubsTable += "<div class='col-xs-4 col-md-2'>"; // close </div>
				clubsTable += "<a href='" + m.get('url') + "'" + "class='thumbnail'" + "</a>";
				clubsTable += "<img src='" + m.get('image') + "'" + "alt='Name'"+ "/>";
				clubsTable += "</div>";
			});
			clubsTable += "</div>";

			// clubsTable to main area (div id="clubsArea")
			$('#clubsArea').html(clubsTable);
		}
	});

	// Create element (div) for progress bar
	var $progress = document.createElement('div');

	// Progress Bar View
	var Progress = Backbone.View.extend({
		tagName: $clubsArea,

		initialize: function() {
			$('body').find('#clubsArea').prepend($progress);
			$('#clubsArea').find('div:first').attr('id', 'progress');
		},

		render: function() {
			
		}
	});

	return {
		ClubsView: ClubsView,
		Progress: Progress
	};
});