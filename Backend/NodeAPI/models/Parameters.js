const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
    brand: [{type: String}],
    phase: [{type: String}],
    finalUrl: [{type: String}],
    track: [{type: String}]
}, {collection: "parameters"});


const Data = mongoose.model ('Parameters', ParametersSchema);

module.exports = {
    Parameters: Data
}