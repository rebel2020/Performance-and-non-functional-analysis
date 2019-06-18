const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PerformanceSchema = require('./PerformanceAudit').PerformanceSchema
const BestPracticeSchema = require('./BestPracticesAudit').BestPracticeSchema
const SEOSchema = require('./SEOAudit').SEOSchema
const PWASchema = require('./PWAAudit').PWASchema

const AuditSchema = new Schema({
    performance_audits : {type:Schema.ObjectId,ref:PerformanceSchema,default:null},
    best_practices_audits : {type:Schema.ObjectId,ref:BestPracticeSchema,default:null},
    seo_audits : {type:Schema.ObjectId,ref:SEOSchema,default:null},
    pwa_audits : {type:Schema.ObjectId,ref:PWASchema,default:null},
});

const Data = mongoose.model('AuditsData', AuditSchema);
module.exports={
    AuditSchema:Data
}