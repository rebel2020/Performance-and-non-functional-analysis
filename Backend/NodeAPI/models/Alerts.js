const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlertSchema =require('./Alert').Alert

const AlertsSchema = new Schema({
    alert: [{type:Object, default: null}],
    fetchUrl : {type:String},
}, {collection: "alerts"});

const Data = mongoose.model('Alerts', AlertsSchema);
// console.log("gfdfgh");
module.exports={

    Alerts: Data
}