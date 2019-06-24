const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GatlingSchema = new Schema({
	stats : {type: String, default: null},
    fetchTime : {type: String, default: Date.now()},
    scala : {type: Object}
}, {collection: "gatling_data"});

const Data = mongoose.model ('GatlingData', GatlingSchema);

module.exports = {
    GatlingData: Data
}