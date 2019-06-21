const { gql } = require('apollo-server-express');
const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;


const typeDefs = gql`
type Environment{
	networkUserAgent: String
	benchmarkIndex: Int
}

type MetricDetailed{
	weight: Int
	score: Float
	description: String
	detail: String
	scoreDisplayMode: String
	numericValue: Float
}

type PerformanceAudit{
	first_contentful_paint: MetricDetailed
	first_meaningful_paint: MetricDetailed
	speed_index: MetricDetailed
	interactive: MetricDetailed
	first_cpu_idle: MetricDetailed
	max_potential_fid: MetricDetailed
	estimated_input_latency: MetricDetailed
	render_blocking_resources: MetricDetailed
	uses_responsive_images: MetricDetailed
	offscreen_images: MetricDetailed
	unminified_css: MetricDetailed
	unminified_javascript: MetricDetailed
	unused_css_rules: MetricDetailed
	uses_optimized_images: MetricDetailed
	uses_webp_images: MetricDetailed
	uses_text_compression: MetricDetailed
	uses_rel_preconnect: MetricDetailed
	time_to_first_byte: MetricDetailed
	redirects: MetricDetailed
	uses_rel_preload: MetricDetailed
	efficient_animated_content: MetricDetailed
	total_byte_weight: MetricDetailed
	uses_long_cache_ttl: MetricDetailed
	dom_size: MetricDetailed
	user_timings: MetricDetailed
	bootup_time: MetricDetailed
	mainthread_work_breakdown: MetricDetailed
	font_display: MetricDetailed
	resource_summary: MetricDetailed
	network_requests: MetricDetailed
	network_rtt: MetricDetailed
	network_server_latency: MetricDetailed
	main_thread_tasks: MetricDetailed
	diagnostics: MetricDetailed
	metrics: MetricDetailed
	score: Float
}

type Audit{
	performance_audits: PerformanceAudit
}

type LighthouseData{
	_id: ID
	environment: Environment
	lighthouseVersion: String
	requestedUrl: String
	finalUrl: String
	runWarnings: [String]
	fetchTime: String
	audits: Audit
}

type Query{
	lighthousedata: [LighthouseData]
	data(id: Int!): LighthouseData
}
`;

module.exports = typeDefs