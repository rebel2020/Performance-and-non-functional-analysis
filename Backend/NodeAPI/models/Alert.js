const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlertSchema = new Schema({
    name: {type:String},
    alertClass: {type:String},
    scoreDIff: {type: Number},
    category: {type: String},
    fetchUrl: {type: String}
});

const Data = mongoose.model('AlertData', AlertSchema);
module.exports = {
	Alert : Data
}