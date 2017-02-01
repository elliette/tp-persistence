const express = require('express');
const router = express.Router();
const Days = require('../../models/day');


router.get('/days', function(req, res, next) {
	res.send("You found me!")

// 	Days.findAll()
// 		.then(function(days) {
// 			res.send("You found me!"); 

// 		}); 
 })

module.exports = router;