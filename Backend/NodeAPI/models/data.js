const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
	category: {type: String, required: true},
	value: {},
	createdAt: {type: Date, default: Date.now}
});

DataSchema.virtual('url').get(function(){
	return '/data/' + this.dID;
})

const Data = mongoose.model('Data', DataSchema);
module.exports = {
	Data: Data
}
