const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GatlingSchema = new Schema({
	stats : {type: String, default: null},
	fetchTime : {type: String, default: null},
	url: {type: String, default: null},
	brand: {type: String, default: null},
	phase: {type: String, default: null},
	server_stats: {type: Object, default: null},
	scala : {type: String}
}, {collection: "gatling_data"});

const Data = mongoose.model ('GatlingData', GatlingSchema);

module.exports = {
	GatlingData: Data
}