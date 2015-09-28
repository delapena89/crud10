var express = require('express');
var router = express.Router();
var Beer = require('../models/beer.js');


// post a SINGLE Beer on /beers
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

// get All Beers on /beers
router.get('/beers' , function(req, res, next) {
  Beer.findQ()
  .then(function(results) {
    res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});

// get SINGLE beer on /beer/:id
router.get('/beer/:id', function(req, res, next) {
  Beer.findByIdQ(req.params.id)
  .then(function(results) {
    res.json(results);
  }).catch(function(results){
    res.json({'message': results});
  }).done();
});

// put SINGLE beer on /beer/:id
router.put('/beer/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    type: req.body.type,
    abv: req.body.abv
  };
  Beer.findByIdAndUpdateQ(req.params.id, update)
  .then(function(results) {
    res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});

//delete SINGLE beer on /beer/:id
router.delete('/beer/:id', function(req, res, next) {
  Beer.findByIdAndRemoveQ(req.params.id)
  .then(function(response) {
    res.json(results);
  }).catch(function(results) {
    res.json({'message': results});
  }).done();
});







module.exports = router;
