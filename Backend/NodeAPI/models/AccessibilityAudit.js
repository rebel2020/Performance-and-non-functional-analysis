const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MetricDetailedSchema = require('./MetricDetailed.js').MetricDetailed;


const AccessibilityAuditSchema = new Schema(
{
	accesskeys: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	aria_allowed_attr: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	aria_required_attr: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null }, 
	aria_required_children: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	aria_required_parent: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null }, 
	aria_roles: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	aria_valid_attr_value: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	aria_valid_attr: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	audio_caption: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	button_name: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	bypass: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	color_contrast: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	definition_list : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	dlitem: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	document_title : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	duplicate_id: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	frame_title: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	html_has_lang: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	html_lang_valid: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	image_alt: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	input_image_alt : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	label : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	layout_table: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	link_name : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	list_ : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	listitem : {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	meta_refresh: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	meta_viewport: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	object_alt: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	tabindex: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	td_headers_attr: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	th_has_data_cells: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	valid_lang: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	video_caption: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	video_description: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	logical_tab_order: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	focusable_controls: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	interactive_element_affordance: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	managed_focus: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	focus_traps: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	custom_controls_labels: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	custom_controls_roles: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	visual_order_follows_dom: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	offscreen_content_hidden: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	heading_levels: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	use_landmarks: {type: Schema.ObjectId, ref:MetricDetailedSchema, default:null },
	score: {type: Number}
});

const Data = mongoose.model('AccessibiltyData', AccessibilityAuditSchema);
module.exports = {
	AccessibilityAudit : Data
}


