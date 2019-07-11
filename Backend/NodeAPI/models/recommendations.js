const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendationsSchema = new Schema({
  weight: {type: Float},
  average_score: {type: Float},
  name: {type: String},
});

const Data = mongoose.model('recommendations', recommendationsSchema);
module.exports = {
	recommendations : Data
}