/* MetroApp
 * version: 0.2.0
 * View
 */

'use strict'

define('view', ['jquery', 'underscore', 'backbone', 'bootstrap'], function($, _, Backbone) {

	var customEvent = {};
	_.extend(customEvent, Backbone.Events);

	// Create element (div) for main area
	var $clubsArea = document.createElement('div');

	// General clubsView
	var ClubsView = Backbone.View.extend({
		el: $clubsArea,

		initialize: function() {
			$('body').append($clubsArea);
			$('body').find('div:last').attr('id', 'clubsArea');
		},

		render: function() {
			var clubsBody = "<div class='row'>"; // close </div>
			_.each(this.collection.models, function(m) {
				clubsBody += "<div class='col-xs-4 col-md-2'>"; // close </div>
				clubsBody += "<a href='" + m.get('url') + "'" + "class='thumbnail'" + "</a>";
				clubsBody += "<img src='" + m.get('image') + "'" + "alt='Name'" + "/>";
				clubsBody += "</div>";
			});
			clubsBody += "</div>";

			// clubsBody to main area (div id="clubsArea")
			$('#clubsArea').html(clubsBody);

			$('img').animate({
				opacity: 1
			}, 1000);
		}
	});

	// Create element (div) for progress bar
	var $progress = document.createElement('div');

	// Progress Bar View
	var Progress = Backbone.View.extend({
		el: $progress,

		initialize: function() {
			$('body').find('#clubsArea').prepend($progress);
			$('#clubsArea').find('div:first').attr('id', 'progress');
		},

		render: function() {
			var progressBody = "<div class='progress'>"; // close </div>
			progressBody += "<div class='progress-bar progress-bar-success progress-bar-striped active' role='progressbar' aria-valuenow='" + this.model.get('value') + "'" + "aria-valuemin='0' aria-valuemax='100' style='width: " + this.model.get('value') + "%" + "'" + ">";
			progressBody += "</div>";
			progressBody += "</div>";
			$('#progress').html(progressBody);
			console.log(this.model.get('value'));
		}
	});

	return {
		ClubsView: ClubsView,
		Progress: Progress
	};
});