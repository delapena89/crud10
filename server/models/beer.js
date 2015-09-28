var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Beer = new Schema ({
  name: String,
  type: String,
  abv: Number
});

mongoose.connect(process.envMONGO_URI || "mongodb://localhost/beers");

module.exports = mongoose.model('beers', Beer);
