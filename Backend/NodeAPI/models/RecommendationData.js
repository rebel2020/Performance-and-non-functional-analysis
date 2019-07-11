const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecommendationDataSchema = new Schema({
  recommend: [{type: Object, default : null}],
},{collection: "recommended_data"});

const Data = mongoose.model('RecommendationData', RecommendationDataSchema);
module.exports = {
	RecommendationData : Data
}