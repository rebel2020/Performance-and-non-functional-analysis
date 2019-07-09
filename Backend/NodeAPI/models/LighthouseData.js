const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const environment = require('./Environment').Environment;

const LighthouseSchema = new Schema({
    userAgent : {type:String},
    environment : {type: Object, default: null},
    lighthouseVersion: {type:String},
    fetchTime : {type: Date, default: null},
    requestedUrl : {type:String, required: true},
    finalUrl : {type:String, required: true},
    runWarnings : [{type:String}],
    track : {type: String},
    audits : {type:Object, default: null},
    project: {type: String},
    brand: {type: String},
    phase: {type: String}
}, {collection: "lighthouse_data"});

LighthouseSchema.index( { fetchTime: 1 } );

const Data = mongoose.model ('Lighthousedata', LighthouseSchema);

module.exports = {
    LighthouseData: Data
}