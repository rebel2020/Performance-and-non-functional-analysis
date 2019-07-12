const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlertsSchema = new Schema({
    alert: [{type:Object, default: null}],
    fetchUrl : {type:String},
}, {collection: "alerts"});

const Data = mongoose.model('Alerts', AlertsSchema);
module.exports={

    Alerts: Data
}