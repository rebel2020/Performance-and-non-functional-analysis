const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MetricDetailedSchema = require('./MetricDetailed.js').MetricDetailed;

const PWASchema = Schema(
    {
        load_fast_enough_for_pwa:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        works_offline:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        offline_start_url:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        is_on_https:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        service_worker:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        installable_manifest:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        redirects_http:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        splash_screen:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        themed_omnibox:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        content_width:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        viewport:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        without_javascript:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        apple_touch_icon:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        pwa_cross_browser:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        pwa_page_transitions:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        pwa_each_page_has_url:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        score : {type: Number},
    }
);

const Data = mongoose.model('PWAData', PWASchema);
module.exports = {
    PWAAudit: Data
};