const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recommendSchema = new Schema({
  audit: {type: String},
  recommendations: [{type: Object, default : null}],
});

const Data = mongoose.model('recommend', recommendSchema);
module.exports = {
	recommend : Data
}