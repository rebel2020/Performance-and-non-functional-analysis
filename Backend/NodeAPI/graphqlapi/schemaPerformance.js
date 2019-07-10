const { gql } = require('apollo-server-express');
const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const PWAAudit = require('../models/PWAAudit').PWAAudit;
const SEOAudit = require('../models/SEOAudit').SEOAudit;
const AccessibilityAudit = require('../models/AccessibilityAudit').AccessibilityAudit;
const BestPracticesAudit = require('../models/BestPracticesAudit').BestPracticesAudit;
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

type AccessibilityAudit{
	accesskeys: MetricDetailed
	aria_allowed_attr: MetricDetailed
	aria_required_attr : MetricDetailed
	aria_required_children: MetricDetailed
	aria_required_parent : MetricDetailed
	aria_roles: MetricDetailed
	aria_valid_attr_value: MetricDetailed
	aria_valid_attr: MetricDetailed
	audio_caption: MetricDetailed
	button_name : MetricDetailed
	bypass : MetricDetailed
	color_contrast: MetricDetailed
	definition_list : MetricDetailed
	dlitem: MetricDetailed
	document_title : MetricDetailed
	duplicate_id: MetricDetailed
	frame_title: MetricDetailed
	html_has_lang: MetricDetailed
	html_lang_valid: MetricDetailed
	image_alt: MetricDetailed
	input_image_alt : MetricDetailed
	label : MetricDetailed
	layout_table: MetricDetailed
	link_name : MetricDetailed
	list_ : MetricDetailed
	listitem : MetricDetailed
	meta_refresh: MetricDetailed
	meta_viewport: MetricDetailed
	object_alt: MetricDetailed
	tabindex: MetricDetailed
	td_headers_attr: MetricDetailed
	th_has_data_cells: MetricDetailed
	valid_lang: MetricDetailed
	video_caption: MetricDetailed
	video_description: MetricDetailed
	logical_tab_order: MetricDetailed
	focusable_controls: MetricDetailed
	interactive_element_affordance: MetricDetailed
	managed_focus: MetricDetailed
	focus_traps: MetricDetailed
	custom_controls_labels: MetricDetailed
	custom_controls_roles: MetricDetailed
	visual_order_follows_dom: MetricDetailed
	offscreen_content_hidden: MetricDetailed
	heading_levels: MetricDetailed
	use_landmarks: MetricDetailed
	score: Float
}

type BestPracticesAudit{
	appcache_manifest: MetricDetailed
	is_on_https: MetricDetailed
	uses_http2: MetricDetailed
	uses_passive_event_listeners: MetricDetailed
	no_document_write: MetricDetailed
	external_anchors_use_rel_noopener: MetricDetailed
	geolocation_on_start: MetricDetailed
	doctype: MetricDetailed
	no_vulnerable_libraries: MetricDetailed
	js_libraries: MetricDetailed
	notification_on_start: MetricDetailed
	deprecations: MetricDetailed
	password_inputs_can_be_pasted_into: MetricDetailed
	errors_in_console: MetricDetailed
	image_aspect_ratio: MetricDetailed
	score: Float
}

type PWAAudit{
	load_fast_enough_for_pwa: MetricDetailed
	works_offline: MetricDetailed
	offline_start_url: MetricDetailed
	is_on_https: MetricDetailed
	service_worker: MetricDetailed
	installable_manifest: MetricDetailed
	redirects_http: MetricDetailed
	splash_screen: MetricDetailed
	themed_omnibox: MetricDetailed
	content_width: MetricDetailed
	viewport: MetricDetailed
	without_javascript: MetricDetailed
	apple_touch_icon: MetricDetailed
	pwa_cross_browser: MetricDetailed
	pwa_page_transitions: MetricDetailed
	pwa_each_page_has_url: MetricDetailed
	score: Float
}

type SEOAudit{
	viewport: MetricDetailed
	document_title: MetricDetailed
	meta_description: MetricDetailed
	http_status_code: MetricDetailed
	link_text: MetricDetailed
	is_crawlable: MetricDetailed
	robots_txt: MetricDetailed
	image_alt: MetricDetailed
	hreflang: MetricDetailed
	canonical: MetricDetailed
	font_size: MetricDetailed
	plugins: MetricDetailed
	tap_targets: MetricDetailed
	score: Float
}


type Audit{
	performance_audits: PerformanceAudit
	best_practices_audits: BestPracticesAudit
	pwa_audits: PWAAudit
	seo_audits: SEOAudit
	accessibility_audits: AccessibilityAudit
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
	phase: String
	brand: String
	project: String
}

type FetchDate{
	month: Int
	day: Int
	year: Int
}

type AuditsAverage{
	performanceAverage: Float
	seoAverage: Float
	pwaAverage: Float
	bestPracticesAverage: Float
	accessibilityAverage: Float
	fetchDate: FetchDate
}

type Bench{
	cpu: Float
	ram: Float
	jvm_heap: Float
}

type ServerStats{
	author_stats: [Bench]
	publisher_stats: [Bench]
	dispatcher_stats: [Bench]
}

type GatlingData{
	_id: ID
	stats: String
	fetchTime: String
	scala: String
	url: String
	server_stats: ServerStats
	brand: String
	phase: String
}

type PerformanceAuditRecommendation{
	first_contentful_paint: String
	first_meaningful_paint: String
	speed_index: String
	interactive: String
	first_cpu_idle: String
}

type SEOAuditRecommendation{
	abc: String
	ijk: String
}

type RecommendationData{
	PerformanceAuditRecommendations: PerformanceAuditRecommendation
	SEOAuditRecommendations: SEOAuditRecommendation
}

type Alert{
    name: String
    class: String
    scoreDiff: Float
    category: String
    fetchUrl: String
}

type Alerts{
    alert: [Alert]
}

type Query{
	allLighthousedata: [LighthouseData]
	gatlingdata(url: String, fetchTimeStart: String, fetchTimeEnd: String
				, phase: String, brand: String): [GatlingData]
	lighthousedata(finalUrl: String, fetchTimeStart: String, fetchTimeEnd: String,
						 project: String, phase: String, brand: String): [LighthouseData]
	average(finalUrl: String, fetchTimeStart: String, fetchTimeEnd: String,
						 project: String, phase: String, brand: String): [AuditsAverage],
	recommendation: RecommendationData,
	alerts: [Alerts]
	
}
`;

module.exports = typeDefs