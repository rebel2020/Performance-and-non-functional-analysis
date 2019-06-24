const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const environment = require('./Environment').Environment;

const LighthouseSchema = new Schema({
    userAgent : {type:String},
    environment : {type: Object, default: null},
    lighthouseVersion: {type:String},
    fetchTime : {type: Date, default: Date.now()},
    requestedUrl : {type:String, required: true},
    finalUrl : {type:String, required: true},
    runWarnings : [{type:String}],
    track : {type: String},
    audits : {type:Object, default: null}
}, {collection: "lighthouse_data"});

const Data = mongoose.model ('Lighthousedata', LighthouseSchema);

module.exports = {
    LighthouseData: Data
}