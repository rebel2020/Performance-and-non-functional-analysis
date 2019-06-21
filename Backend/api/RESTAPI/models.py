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

class Audit(EmbeddedDocument):
    performance_audits = EmbeddedDocumentField(PerformanceAudit)


class LighthouseData(Document):
    audits = EmbeddedDocumentField(Audit)
    fetchTime = StringField(default=str(datetime.date.today()))
    requestedUrl = StringField(required=True)
    finalUrl = StringField(required=True)
    runWarnings = StringField()
    lighthouseVersion = StringField(required=True)
    environment =StringField(required=True)

class GetlingData(Document):
    stats = StringField()
    fetchTime = StringField(default=str(datetime.date.today()))
    scala = StringField()

