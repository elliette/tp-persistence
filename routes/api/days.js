const express = require('express');
const router = express.Router();
const Days = require('../../models/day');


router.get('/:id', function(req, res, next) {
	// Days.findAll()
 //  .then(function(days){
 //    console.log("HEY");
 //  })
 //  .catch(next);

});

router.post('/', (req, res, next) => {
  // once the + button is clicked,
  // info in the itinerary panel will be added to the database for that day; id  for that day will be created then.
  // Day.create({

  // })
  console.log(req.body);
  Days.create({
    number: 1
  })
  .then(function(newDay){
    res.json(newDay);
  })
  .catch(next);

});

router.put('/', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(day){
    day.destroy();
  })
  .catch(next);

});

module.exports = router;