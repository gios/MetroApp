/* MetroApp
 * version: 0.2.0
 * Main
 */

'use strict'

require(['jquery', 'underscore', 'backbone', 'model', 'collection', 'view', 'router'], function($, _, Backbone, Model, Collection, View, Router) {

	var clubModel = new Model.Club;
	var progressModel = new Model.Progress;

	// Add clubs to collection
	var clubsCollection = new Collection.ClubCollection([{
		name: 'Chelsea',
		image: 'images/chelsea.png',
		rank: 5,
		url: '#chelsea'
	}, {
		name: 'Arsenal',
		image: 'images/arsenal.png',
		rank: 5,
		url: '#arsenal'
	}, {
		name: 'Bayern Munich',
		image: 'images/bayern_munich.png',
		rank: 5,
		url: '#bayern_munich'
	}, {
		name: 'Barcelona',
		image: 'images/barcelona.png',
		rank: 5,
		url: '#barcelona'
	}, {
		name: 'PSG',
		image: 'images/psg.png',
		rank: 5,
		url: '#psg'
	}, {
		name: 'Real Madrid',
		image: 'images/real_madrid.png',
		rank: 5,
		url: '#real_madrid'
	}, {
		name: 'Manchester City',
		image: 'images/man_city.png',
		rank: 5,
		url: '#man_city'
	}, {
		name: 'Manchester United',
		image: 'images/man_united.png',
		rank: 5,
		url: '#man_united'
	}, {
		name: 'Milan',
		image: 'images/milan.png',
		rank: 4.5,
		url: '#milan'
	}, {
		name: 'Borussia Dortmund',
		image: 'images/borussia_dortmund.png',
		rank: 4.5,
		url: '#borussia_dortmund'
	}, {
		name: 'Tottenham',
		image: 'images/tottenham.png',
		rank: 4.5,
		url: '#tottenham'
	}, {
		name: 'Newcastle',
		image: 'images/newcastle.png',
		rank: 4,
		url: '#newcastle'
	}]);

	var clubsView = new View.ClubsView({
		collection: clubsCollection
	});

	clubsView.render();

	var progressView = new View.Progress({
		model: progressModel,
		collection: clubsCollection
	});

	progressView.render();

	var router = new Router.Router;

	router.on('route:goChelsea', function() {
		console.log('Chelsea');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goArsenal', function() {
		console.log('Arsenal');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goBayernMunich', function() {
		console.log('Bayern Munich');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goBarcelona', function() {
		console.log('Barcelona');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goPSG', function() {
		console.log('PSG');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goRealMadrid', function() {
		console.log('Real Madrid');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goManCity', function() {
		console.log('Man City');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goManUnited', function() {
		console.log('Man United');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goMilan', function() {
		console.log('Milan');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goBorussiaDortmund', function() {
		console.log('Borussia Dortmund');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goTottenham', function() {
		console.log('Tottenham');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	router.on('route:goNewcastle', function() {
		console.log('Newcastle');

		var i = 0;
		var interval = setInterval(function() {
			progressModel.set('value', i += 33.4);
			progressModel.on('change', progressView.render(), this);
			console.log(progressModel.get('value'));
			if (progressModel.get('value') >= 100) {
				$('.progress').find('div').animate({
					opacity: 0
				}, 1000, function() {
					$('.progress').find('div').attr('aria-valuenow', 0);
				});
				clearInterval(interval);
			};
		}, 1000);
	});

	Backbone.history.start();

	// Refresh Collection.DataCollection
	console.log(clubsCollection.toJSON());
});