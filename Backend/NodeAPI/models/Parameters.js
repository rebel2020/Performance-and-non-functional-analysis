const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
    brands: [{type: String}],
    environments: [{type: String}],
    urls: [{type: String}],
    tracks: [{type: String}]
}, {collection: "parameters"});


const Data = mongoose.model ('Parameters', ParametersSchema);

module.exports = {
    Parameters: Data
}