var express = require('express');
var router = express.Router();
var Beer = require('../models/beer.js');


// post a SINGLE Beer
router.post('/beers', function(req, res, next){
  newBeer = new Beer({
    name: req.body.name,
    type: req.body.type,
    abv: req.body.abv
  }).saveQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});




module.exports = router;
