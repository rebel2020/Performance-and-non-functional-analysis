const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MetricDetailedSchema = require('./MetricDetailed.js').MetricDetailed;

const PerformanceSchema = Schema(
    {
        first_contentful_paint:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        first_meaningful_paint:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        speed_index:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        interactive:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        first_cpu_idle:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        max_potential_fid:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        estimated_input_latency:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        render_blocking_resources:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_responsive_images:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        offscreen_images:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        unminified_css:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        unminified_javascript:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        unused_css_rules:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_optimized_images:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_webp_images:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_text_compression:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_rel_preconnect:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        time_to_first_byte:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        redirects:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_rel_preload:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        efficient_animated_content:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        total_byte_weight:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        uses_long_cache_ttl:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        dom_size:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        user_timings:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        bootup_time:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        mainthread_work_breakdown:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        font_display:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        resource_summary:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        network_requests:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        network_rtt:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        network_server_latency:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        main_thread_tasks:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        diagnostics:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        metrics:{type: Schema.ObjectId,ref:MetricDetailedSchema,default:null },
        score : {type: Number},
    }
);

const Data = mongoose.model('PerformanceData', PerformanceSchema);
module.exports = {
    PerformanceAudit: Data
};