const express = require('express');
const router = express.Router();
const Days = require('../../models/day');


router.get('/', function(req, res, next) {
	Days.findAll()
  .then(function(days){
    res.json(days); 
  })
  .catch(next);

});

 // var number = 1; 

router.post('/', (req, res, next) => {
  // once the + button is clicked,
  // info in the itinerary panel will be added to the database for that day; id  for that day will be created then.
  // Day.create({

  // })
  Days.create(req.body)
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