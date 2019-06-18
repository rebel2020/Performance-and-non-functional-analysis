const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MetricDetailedSchema = require('./MetricDetailed.js').MetricDetailedSchema;

const BestPracticesAuditSchema = new Schema(
    {
        appcache_manifest:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        is_on_https:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_http2:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_passive_event_listeners:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        no_document_write:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        external_anchors_use_rel_noopener:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        geolocation_on_start:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        doctype:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        no_vulnerable_libraries:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        js_libraries:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        notification_on_start:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        deprecations:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        password_inputs_can_be_pasted_into:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        errors_in_console:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        image_aspect_ratio:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        score:{type: Number },

    }
);

const Data = mongoose.model('BestPracticeData', BestPracticesAuditSchema);
module.exports = {
	BestPracticeSchema : Data
}