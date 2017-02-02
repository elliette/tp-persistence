const express = require('express');
const router = express.Router();
const Days = require('../../models/day');


router.get('/', function(req, res, next) {
	res.send("You found me!")
 });

router.post('/', (req, res, next) => {

});

router.put('/', (req, res, next) => {

});

router.delete('/', (req, res, next) => {

});

module.exports = router;