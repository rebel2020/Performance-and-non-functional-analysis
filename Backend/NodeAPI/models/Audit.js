const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PerformanceSchema = require('./PerformanceAudit').PerformanceAudit
const BestPracticeSchema = require('./BestPracticesAudit').BestPracticesAudit
const SEOSchema = require('./SEOAudit').SEOAudit
const PWASchema = require('./PWAAudit').PWAAudit

const AuditSchema = new Schema({
    performance_audits : {type:Schema.ObjectId,ref:PerformanceSchema,default:null},
    best_practices_audits : {type:Schema.ObjectId,ref:BestPracticeSchema,default:null},
    seo_audits : {type:Schema.ObjectId,ref:SEOSchema,default:null},
    pwa_audits : {type:Schema.ObjectId,ref:PWASchema,default:null},

});
const Data = mongoose.model('Audit', AuditSchema);
module.exports={
    Audit:Data
}