const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnvironmentSchema = new Schema(
    {
        networkUserAgent : {type: String, required: true},
        hostUserAgent : {type: String},
        benchmarkIndex : {type: Number},
    }
);

const Data = mongoose.model('EnvironmentData', EnvironmentSchema);
module.exports = {
	 EnvironmentSchema: Data
}
