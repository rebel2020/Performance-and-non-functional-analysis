const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetricDetailedSchema = new Schema(
    {
        weight : {type: Number,required:true},
        score : {type: Number},
        description : {type: String},
        detail : {type:String},
        scoreDisplayMode : {type: String,required: true},
        numericValue : {type : Number}
    }
);

const Data = mongoose.model('MetricData', MetricDetailedSchema);
module.exports = {
	MetricDetailed : Data
}