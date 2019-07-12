from mongoengine import *
import datetime

class MetricDetailed(EmbeddedDocument):
    numericValue=IntField()
    weight = FloatField()
    score = FloatField()
    scoreDisplayMode = StringField()
    description = StringField()
    details = StringField()

class PerformanceAudit(EmbeddedDocument):
	first_contentful_paint = EmbeddedDocumentField(MetricDetailed)
	first_meaningful_paint = EmbeddedDocumentField(MetricDetailed)
	speed_index = EmbeddedDocumentField(MetricDetailed)
	interactive = EmbeddedDocumentField(MetricDetailed)
	first_cpu_idle = EmbeddedDocumentField(MetricDetailed)
	max_potential_fid = EmbeddedDocumentField(MetricDetailed)
	estimated_input_latency = EmbeddedDocumentField(MetricDetailed)
	render_blocking_resources = EmbeddedDocumentField(MetricDetailed)
	uses_responsive_images = EmbeddedDocumentField(MetricDetailed)
	offscreen_images = EmbeddedDocumentField(MetricDetailed)
	unminified_css = EmbeddedDocumentField(MetricDetailed)
	unminified_javascript = EmbeddedDocumentField(MetricDetailed)
	unused_css_rules = EmbeddedDocumentField(MetricDetailed)
	uses_optimized_images = EmbeddedDocumentField(MetricDetailed)
	uses_webp_images = EmbeddedDocumentField(MetricDetailed)
	uses_text_compression = EmbeddedDocumentField(MetricDetailed)
	uses_rel_preconnect = EmbeddedDocumentField(MetricDetailed)
	time_to_first_byte = EmbeddedDocumentField(MetricDetailed)
	redirects = EmbeddedDocumentField(MetricDetailed)
	uses_rel_preload = EmbeddedDocumentField(MetricDetailed)
	efficient_animated_content = EmbeddedDocumentField(MetricDetailed)
	total_byte_weight = EmbeddedDocumentField(MetricDetailed)
	uses_long_cache_ttl = EmbeddedDocumentField(MetricDetailed)
	dom_size = EmbeddedDocumentField(MetricDetailed)
	user_timings = EmbeddedDocumentField(MetricDetailed)
	bootup_time = EmbeddedDocumentField(MetricDetailed)
	mainthread_work_breakdown = EmbeddedDocumentField(MetricDetailed)
	font_display = EmbeddedDocumentField(MetricDetailed)
	resource_summary = EmbeddedDocumentField(MetricDetailed)
	network_requests = EmbeddedDocumentField(MetricDetailed)
	network_rtt = EmbeddedDocumentField(MetricDetailed)
	network_server_latency = EmbeddedDocumentField(MetricDetailed)
	main_thread_tasks = EmbeddedDocumentField(MetricDetailed)
	diagnostics = EmbeddedDocumentField(MetricDetailed)
	metrics = EmbeddedDocumentField(MetricDetailed)
	score = FloatField()

class AcessibilityAudit(EmbeddedDocument):
	accesskeys = EmbeddedDocumentField(MetricDetailed)
	aria_allowed_attr = EmbeddedDocumentField(MetricDetailed)
	aria_required_attr = EmbeddedDocumentField(MetricDetailed)
	aria_required_children = EmbeddedDocumentField(MetricDetailed)
	aria_required_parent = EmbeddedDocumentField(MetricDetailed)
	aria_roles = EmbeddedDocumentField(MetricDetailed)
	aria_valid_attr_value = EmbeddedDocumentField(MetricDetailed)
	aria_valid_attr = EmbeddedDocumentField(MetricDetailed)
	audio_caption = EmbeddedDocumentField(MetricDetailed)
	button_name = EmbeddedDocumentField(MetricDetailed)
	bypass = EmbeddedDocumentField(MetricDetailed)
	color_contrast = EmbeddedDocumentField(MetricDetailed)
	definition_list = EmbeddedDocumentField(MetricDetailed)
	dlitem = EmbeddedDocumentField(MetricDetailed)
	document_title = EmbeddedDocumentField(MetricDetailed)
	duplicate_id = EmbeddedDocumentField(MetricDetailed)
	frame_title = EmbeddedDocumentField(MetricDetailed)
	html_has_lang = EmbeddedDocumentField(MetricDetailed)
	html_lang_valid = EmbeddedDocumentField(MetricDetailed)
	image_alt = EmbeddedDocumentField(MetricDetailed)
	input_image_alt = EmbeddedDocumentField(MetricDetailed)
	label = EmbeddedDocumentField(MetricDetailed)
	layout_table = EmbeddedDocumentField(MetricDetailed)
	link_name = EmbeddedDocumentField(MetricDetailed)
	list_ = EmbeddedDocumentField(MetricDetailed)
	listitem = EmbeddedDocumentField(MetricDetailed)
	meta_refresh = EmbeddedDocumentField(MetricDetailed)
	meta_viewport = EmbeddedDocumentField(MetricDetailed)
	object_alt = EmbeddedDocumentField(MetricDetailed)
	tabindex = EmbeddedDocumentField(MetricDetailed)
	td_headers_attr = EmbeddedDocumentField(MetricDetailed)
	th_has_data_cells = EmbeddedDocumentField(MetricDetailed)
	valid_lang = EmbeddedDocumentField(MetricDetailed)
	video_caption = EmbeddedDocumentField(MetricDetailed)
	video_description = EmbeddedDocumentField(MetricDetailed)
	logical_tab_order = EmbeddedDocumentField(MetricDetailed)
	focusable_controls = EmbeddedDocumentField(MetricDetailed)
	interactive_element_affordance = EmbeddedDocumentField(MetricDetailed)
	managed_focus = EmbeddedDocumentField(MetricDetailed)
	focus_traps = EmbeddedDocumentField(MetricDetailed)
	custom_controls_labels = EmbeddedDocumentField(MetricDetailed)
	custom_controls_roles = EmbeddedDocumentField(MetricDetailed)
	visual_order_follows_dom = EmbeddedDocumentField(MetricDetailed)
	offscreen_content_hidden = EmbeddedDocumentField(MetricDetailed)
	heading_levels = EmbeddedDocumentField(MetricDetailed)
	use_landmarks = EmbeddedDocumentField(MetricDetailed)
	score = FloatField()

class BestPracticesAudit(EmbeddedDocument):
	appcache_manifest = EmbeddedDocumentField(MetricDetailed)
	is_on_https = EmbeddedDocumentField(MetricDetailed)
	uses_http2 = EmbeddedDocumentField(MetricDetailed)
	uses_passive_event_listeners = EmbeddedDocumentField(MetricDetailed)
	no_document_write = EmbeddedDocumentField(MetricDetailed)
	external_anchors_use_rel_noopener = EmbeddedDocumentField(MetricDetailed)
	geolocation_on_start = EmbeddedDocumentField(MetricDetailed)
	doctype = EmbeddedDocumentField(MetricDetailed)
	no_vulnerable_libraries = EmbeddedDocumentField(MetricDetailed)
	js_libraries = EmbeddedDocumentField(MetricDetailed)
	notification_on_start = EmbeddedDocumentField(MetricDetailed)
	deprecations = EmbeddedDocumentField(MetricDetailed)
	password_inputs_can_be_pasted_into = EmbeddedDocumentField(MetricDetailed)
	errors_in_console = EmbeddedDocumentField(MetricDetailed)
	image_aspect_ratio = EmbeddedDocumentField(MetricDetailed)
	score = FloatField()

class SEOAudit(EmbeddedDocument):
	viewport = EmbeddedDocumentField(MetricDetailed)
	document_title = EmbeddedDocumentField(MetricDetailed)
	meta_description = EmbeddedDocumentField(MetricDetailed)
	http_status_code = EmbeddedDocumentField(MetricDetailed)
	link_text = EmbeddedDocumentField(MetricDetailed)
	is_crawlable = EmbeddedDocumentField(MetricDetailed)
	robots_txt = EmbeddedDocumentField(MetricDetailed)
	image_alt = EmbeddedDocumentField(MetricDetailed)
	hreflang = EmbeddedDocumentField(MetricDetailed)
	canonical = EmbeddedDocumentField(MetricDetailed)
	font_size = EmbeddedDocumentField(MetricDetailed)
	plugins = EmbeddedDocumentField(MetricDetailed)
	tap_targets = EmbeddedDocumentField(MetricDetailed)
	score = FloatField()

class PWAAudit(EmbeddedDocument):
	load_fast_enough_for_pwa = EmbeddedDocumentField(MetricDetailed)
	works_offline = EmbeddedDocumentField(MetricDetailed)
	offline_start_url = EmbeddedDocumentField(MetricDetailed)
	is_on_https = EmbeddedDocumentField(MetricDetailed)
	service_worker = EmbeddedDocumentField(MetricDetailed)
	installable_manifest = EmbeddedDocumentField(MetricDetailed)
	redirects_http = EmbeddedDocumentField(MetricDetailed)
	splash_screen = EmbeddedDocumentField(MetricDetailed)
	themed_omnibox = EmbeddedDocumentField(MetricDetailed)
	content_width = EmbeddedDocumentField(MetricDetailed)
	viewport = EmbeddedDocumentField(MetricDetailed)
	without_javascript = EmbeddedDocumentField(MetricDetailed)
	apple_touch_icon = EmbeddedDocumentField(MetricDetailed)
	pwa_cross_browser = EmbeddedDocumentField(MetricDetailed)
	pwa_page_transitions = EmbeddedDocumentField(MetricDetailed)
	pwa_each_page_has_url = EmbeddedDocumentField(MetricDetailed)
	score = FloatField()


class Audit(EmbeddedDocument):
	performance_audits = EmbeddedDocumentField(PerformanceAudit)
	best_practices_audits = EmbeddedDocumentField(BestPracticesAudit)
	seo_audits = EmbeddedDocumentField(SEOAudit)
	pwa_audits = EmbeddedDocumentField(PWAAudit)
	accessibility_audits = EmbeddedDocumentField(AcessibilityAudit)

class Bench(EmbeddedDocument):
	cpu = FloatField()
	ram = FloatField()
	jvm_heap = FloatField()

class ServerStats(EmbeddedDocument):
	author_stats = ListField(EmbeddedDocumentField(Bench))
	publisher_stats = ListField(EmbeddedDocumentField(Bench))
	dispatcher_stats = ListField(EmbeddedDocumentField(Bench))


class Environment(EmbeddedDocument):
    networkUserAgent = StringField()
    hostUserAgent =StringField()
    benchmarkIndex = IntField()

class LighthouseData(Document):
	audits = EmbeddedDocumentField(Audit)
	fetchTime = DateTimeField(required=True)
	requestedUrl = StringField(required=True)
	finalUrl = StringField(required=True)
	runWarnings = StringField()
	lighthouseVersion = StringField(required=True)
	environment =EmbeddedDocumentField(Environment)
	brand=StringField()
	phase = StringField()
	project = StringField()

class GatlingData(Document):
	stats = StringField()
	scala = StringField()
	url = StringField()
	fetchTime = DateTimeField()
	server_stats = EmbeddedDocumentField(ServerStats)
	brand = StringField()
	phase = StringField()

class URLData(Document):
	urls = ListField(StringField())

class GlobalAvg(Document):
	avg = DictField()
	url = StringField()


class Alert(EmbeddedDocument):
	name= StringField()
	alertClass= StringField()
	scoreDiff= FloatField()
	category= StringField()
	fetchUrl= StringField()

class Alerts(Document):
	fetchUrl= StringField()
	alert = ListField(EmbeddedDocumentField(Alert))

class rec_list(EmbeddedDocument):
	name = StringField()
	average_score = FloatField()
	weight = FloatField()

class Recommendation(EmbeddedDocument):
	audit = StringField()
	recommendations = ListField(EmbeddedDocumentField(rec_list))
	

class Recommended_Data(Document):
	fetchURL = StringField()
	recommend = ListField(EmbeddedDocumentField(Recommendation))
