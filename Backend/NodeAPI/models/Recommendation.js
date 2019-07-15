const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
	recommend: [{type: Object, default: null}],
  	fetchURL: {type: String, default: null}  
}, {collection: "recommended_data"});

const Data = mongoose.model('Recommendation', RecommendationSchema);
module.exports = {
	Recommendation: Data
}









