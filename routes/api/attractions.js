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

			// var hotelNames = hotels.map(function(hotel) {
			// 	return hotel.name
			// });
			// res.json(hotelNames);
		// });
});

router.get('/restaurants', function(req, res, next) {
	Restaurants.findAll()
		.then(function(restaurants) {

			res.json(restaurants); 
		})
		// 	var restaurantNames = restaurants.map(function(restaurant) {
		// 		return restaurant.name
		// 	});
		// 	res.json(restaurantNames);
		// })
});

router.get('/activities', function(req, res, next) {
	Activities.findAll()
		.then(function(activities) {

			res.json(activities); 

		}); 

		// 	var activityNames = activities.map(function(activity) {
		// 		return activity.name
		// 	});
		// 	res.json(activityNames);
		// })
})



module.exports = router;