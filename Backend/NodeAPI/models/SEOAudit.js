const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MetricDetailedSchema = require('./MetricDetailed.js').MetricDetailedSchema;

const SEOSchema = Schema(
    {
        viewport:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        document_title:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        meta_description:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        http_status_code:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        link_text:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        is_crawlable:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        robots_txt:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        image_alt:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        hreflang:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        canonical:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        font_size:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        plugins:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        tap_targets:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        score : {type: Number},
    }
);

const Data = mongoose.model('SEOData', SEOSchema);
module.exports = {
    SEOSchema: Data
};