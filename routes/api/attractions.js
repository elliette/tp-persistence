const express = require('express');
const router = express.Router();
const Activities = require('../../models/activity');
const Hotels = require('../../models/hotel');
const Restaurants = require('../../models/restaurant');



router.get('/hotels', function(req, res, next) {
	Hotels.findAll()
		.then(function(hotels) {
			res.json(hotels); 
		}); 
});

router.get('/restaurants', function(req, res, next) {
	Restaurants.findAll()
		.then(function(restaurants) {
			res.json(restaurants); 
		})

});

router.get('/activities', function(req, res, next) {
	Activities.findAll()
		.then(function(activities) {
			res.json(activities); 

		});
});



module.exports = router;