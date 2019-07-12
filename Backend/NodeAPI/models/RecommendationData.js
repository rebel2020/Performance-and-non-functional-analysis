const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecommendationSchema = new Schema({
  fetchURL: {type: String, default: null},
  recommend: [{type:Object, default: null}],
},{collection: "recommended_data"});

const Data = mongoose.model('RecommendationData', RecommendationSchema);
module.exports = {
	RecommendationData : Data
}