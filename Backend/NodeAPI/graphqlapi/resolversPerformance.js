const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;
var Request = require("request");


const defaultRecommendationData = 
{
	"PerformanceAuditRecommendations": {
		"first_contentful_paint": "1. Use in-line styles for above the fold content, \n2. Use an automated tool like penthouse and Apache’s mod_pagespeed to keep your site sustainably scalable,\n 3. Reduce the scope and complexity of style calculations,\n4. If a style isn’t being used, remove it via Chrome Dev Tool’s built-in Code Coverage functionality",

		"first_meaningful_paint": "1. Load the resources needed for your above-the-fold content before you load scripts necessary for offscreen elements, \n2. Ditch the fancy fonts or include a fallback font",

		"speed_index": "1. Minimize main-thread work,\n2. educe JavaScript execution time,\n3. Minimize Critical Requests Depth,\n 4. Eliminate Render-Blocking Resources,\n 5. Defer offscreen images",

		"interactive": "1. Defer or remove unnecessary JavaScript work that occurs during page load,\n2. Optimize JavaScript Bootup,\n3. Reduce JavaScript Payloads with Tree Shaking,\n4. Reduce JavaScript Payloads with Code Splitting",
		"first_cpu_idle": "1. Minimize the number of required resources that must be downloaded and executed before a page can load, \n2. Reduce the size of required resources"

	},

	"SEOAuditRecommendations": {
		"abc": "xyz",
		"ijk": "mln"
	}
};

const defaultAlertData=[{"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "appcache_manifest", "category": "Best practices", "scoreDiff": 13.142857142857146, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "uses_passive_event_listeners", "category": "Best practices", "scoreDiff": 13.428571428571423, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "geolocation_on_start", "category": "Best practices", "scoreDiff": 15.428571428571425, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "doctype", "category": "Best practices", "scoreDiff": 12.571428571428566, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "notification_on_start", "category": "Best practices", "scoreDiff": 14.28571428571429, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "deprecations", "category": "Best practices", "scoreDiff": 11.428571428571422, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "password_inputs_can_be_pasted_into", "category": "Best practices", "scoreDiff": 14.714285714285714, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "image_aspect_ratio", "category": "Best practices", "scoreDiff": 13.285714285714278, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "viewport", "category": "Seo", "scoreDiff": 12.714285714285712, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "document_title", "category": "Seo", "scoreDiff": 13.571428571428578, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "meta_description", "category": "Seo", "scoreDiff": 14.000000000000002, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "http_status_code", "category": "Seo", "scoreDiff": 10.42857142857143, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "robots_txt", "category": "Seo", "scoreDiff": 10.142857142857142, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "hreflang", "category": "Seo", "scoreDiff": 15.285714285714292, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "font_size", "category": "Seo", "scoreDiff": 12.714285714285712, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "plugins", "category": "Seo", "scoreDiff": 13.285714285714278, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "tap_targets", "category": "Seo", "scoreDiff": 15.0, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_allowed_attr", "category": "Accessibility", "scoreDiff": 14.857142857142858, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_required_attr", "category": "Accessibility", "scoreDiff": 13.0, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_required_children", "category": "Accessibility", "scoreDiff": 15.142857142857146, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_required_parent", "category": "Accessibility", "scoreDiff": 15.714285714285714, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_roles", "category": "Accessibility", "scoreDiff": 14.857142857142858, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_valid_attr_value", "category": "Accessibility", "scoreDiff": 14.57142857142857, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "aria_valid_attr", "category": "Accessibility", "scoreDiff": 11.142857142857142, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "button_name", "category": "Accessibility", "scoreDiff": 10.142857142857142, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "bypass", "category": "Accessibility", "scoreDiff": 14.428571428571423, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "color_contrast", "category": "Accessibility", "scoreDiff": 10.71428571428571, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "html_has_lang", "category": "Accessibility", "scoreDiff": 13.142857142857146, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "html_lang_valid", "category": "Accessibility", "scoreDiff": 12.142857142857133, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "label", "category": "Accessibility", "scoreDiff": 12.0, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "link_name", "category": "Accessibility", "scoreDiff": 15.714285714285714, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "listitem", "category": "Accessibility", "scoreDiff": 11.571428571428577, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "tabindex", "category": "Accessibility", "scoreDiff": 15.142857142857146, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "content_width", "category": "Pwa", "scoreDiff": 12.285714285714278, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/", "name": "without_javascript", "category": "Pwa", "scoreDiff": 14.857142857142858, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "font_size", "category": "Seo", "scoreDiff": 23.17880794701986, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "first_contentful_paint", "category": "Performance", "scoreDiff": 19.52690166975881, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "first_meaningful_paint", "category": "Performance", "scoreDiff": 10.934065934065963, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "speed_index", "category": "Performance", "scoreDiff": 12.571428571428559, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "first_cpu_idle", "category": "Performance", "scoreDiff": 13.85714285714285, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "appcache_manifest", "category": "Best practices", "scoreDiff": 14.28571428571429, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "uses_passive_event_listeners", "category": "Best practices", "scoreDiff": 13.0, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "geolocation_on_start", "category": "Best practices", "scoreDiff": 15.000000000000002, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "doctype", "category": "Best practices", "scoreDiff": 10.142857142857142, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "notification_on_start", "category": "Best practices", "scoreDiff": 13.142857142857146, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "deprecations", "category": "Best practices", "scoreDiff": 12.571428571428566, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "image_aspect_ratio", "category": "Best practices", "scoreDiff": 12.142857142857133, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "viewport", "category": "Seo", "scoreDiff": 15.142857142857146, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "document_title", "category": "Seo", "scoreDiff": 12.428571428571434, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "meta_description", "category": "Seo", "scoreDiff": 11.285714285714288, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "http_status_code", "category": "Seo", "scoreDiff": 10.42857142857143, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "robots_txt", "category": "Seo", "scoreDiff": 15.285714285714292, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "hreflang", "category": "Seo", "scoreDiff": 15.57142857142857, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "font_size", "category": "Seo", "scoreDiff": 41.99999999999999, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "plugins", "category": "Seo", "scoreDiff": 15.428571428571425, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "tap_targets", "category": "Seo", "scoreDiff": 10.00000000000002, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "aria_allowed_attr", "category": "Accessibility", "scoreDiff": 15.714285714285714, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "aria_required_attr", "category": "Accessibility", "scoreDiff": 13.571428571428578, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "aria_required_children", "category": "Accessibility", "scoreDiff": 15.428571428571425, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "aria_roles", "category": "Accessibility", "scoreDiff": 12.285714285714278, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "aria_valid_attr_value", "category": "Accessibility", "scoreDiff": 11.857142857142854, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "aria_valid_attr", "category": "Accessibility", "scoreDiff": 14.57142857142857, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "button_name", "category": "Accessibility", "scoreDiff": 10.42857142857143, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "bypass", "category": "Accessibility", "scoreDiff": 10.71428571428571, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "html_has_lang", "category": "Accessibility", "scoreDiff": 10.571428571428577, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "html_lang_valid", "category": "Accessibility", "scoreDiff": 12.285714285714278, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "label", "category": "Accessibility", "scoreDiff": 13.428571428571423, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "link_name", "category": "Accessibility", "scoreDiff": 15.000000000000002, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "listitem", "category": "Accessibility", "scoreDiff": 13.285714285714278, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "tabindex", "category": "Accessibility", "scoreDiff": 13.714285714285712, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "content_width", "category": "Pwa", "scoreDiff": 11.857142857142854, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/grand-cherokee.html", "name": "without_javascript", "category": "Pwa", "scoreDiff": 12.428571428571434, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/jeep-life.html", "name": "first_contentful_paint", "category": "Performance", "scoreDiff": 11.578947368421051, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/jeep-life.html", "name": "first_meaningful_paint", "category": "Performance", "scoreDiff": 12.380952380952381, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/2018/grand-cherokee/gallery.html", "name": "first_contentful_paint", "category": "Performance", "scoreDiff": 22.0496894409938, "class": "trend"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/2018/grand-cherokee/gallery.html", "name": "first_meaningful_paint", "category": "Performance", "scoreDiff": 15.60975609756098, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/2018/grand-cherokee/gallery.html", "name": "performance_audits", "category": "performance_audits", "scoreDiff": 17.368421052631575, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/2018/grand-cherokee/gallery.html", "name": "button_name", "category": "Accessibility", "scoreDiff": 14.285714285714285, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/trail-rated.html", "name": "first_contentful_paint", "category": "Performance", "scoreDiff": 9.519867549668879, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/trail-rated.html", "name": "performance_audits", "category": "performance_audits", "scoreDiff": 5.588235294117645, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/jeep-wave.html", "name": "first_contentful_paint", "category": "Performance", "scoreDiff": 6.017369727047156, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/custom-graphics.html", "name": "speed_index", "category": "Performance", "scoreDiff": 8.54700854700855, "class": "trend"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/custom-graphics.html", "name": "interactive", "category": "Performance", "scoreDiff": 5.660377358490579, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/custom-graphics.html", "name": "first_meaningful_paint", "category": "Performance", "scoreDiff": 11.854103343465047, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/new-inventory.wrangler.2018.html?modelYearCode=IUJ201810&radius=25", "name": "first_cpu_idle", "category": "Performance", "scoreDiff": 6.896551724137915, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare", "name": "interactive", "category": "Performance", "scoreDiff": 6.499999999999999, "class": "trend"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare", "name": "first_cpu_idle", "category": "Performance", "scoreDiff": 7.653061224489807, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare", "name": "link_name", "category": "Accessibility", "scoreDiff": 14.285714285714285, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare", "name": "first_meaningful_paint", "category": "Performance", "scoreDiff": 16.421207658321062, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare", "name": "link_name", "category": "Accessibility", "scoreDiff": 28.57142857142858, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits/vehicle.html/27", "name": "speed_index", "category": "Performance", "scoreDiff": 18.36734693877552, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits/vehicle.html/27", "name": "interactive", "category": "Performance", "scoreDiff": 14.285714285714274, "class": "globalAverage"}, {"fetchUrl": "http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits/vehicle.html/27", "name": "first_cpu_idle", "category": "Performance", "scoreDiff": 21.428571428571423, "class": "globalAverage"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-alfaromeousa-sape.test.com/", "name": "interactive", "category": "Performance", "scoreDiff": 24.999999999999996, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-alfaromeousa-sape.test.com/lineup.inventory?app=inventory", "name": "first_cpu_idle", "category": "Performance", "scoreDiff": 50.0, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-alfaromeousa-sape.test.com/a-story-that-made-history", "name": "speed_index", "category": "Performance", "scoreDiff": 50.0, "class": "trend"}, {"fetchUrl": "http://fca-qa1-alfaromeousa-sape.test.com/a-story-that-made-history", "name": "first_cpu_idle", "category": "Performance", "scoreDiff": 50.0, "class": "trend"}]}, {"alert": [{"fetchUrl": "http://fca-qa1-alfaromeousa-sape.test.com/a-story-that-made-history", "name": "performance_audits", "category": "performance_audits", "scoreDiff": 50.0, "class": "trend"}]}];

const resolversPerformance = {
	Query: {
		allLighthousedata: async () => {
			return await LighthouseData.find({}).exec();
		},

		gatlingdata: async(root, options) => {
			// return await GatlingData.find({}).exec();
			const {url, fetchTimeStart, fetchTimeEnd, phase, brand} = options;
			var timeStart = fetchTimeStart;
			var timeEnd = fetchTimeEnd;

			for(let prop in options){
				if(prop === ''){
					delete prop;
				}
			}

			const newOptions = Object.fromEntries(Object.entries(options)
				.filter(arr => {
					return (arr[1] !== "" && arr[0] !== "fetchTimeStart" && arr[0] !== "fetchTimeEnd")  
				}));

			if(fetchTimeStart === undefined || fetchTimeStart == "")
			{
				timeStart = new Date(0000000000000);
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
			}
			if(fetchTimeEnd === undefined || fetchTimeEnd == "")
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(fetchTimeEnd));
				console.log(timeEnd);
			}
			
			return await GatlingData
			.find({
				...newOptions,
				fetchTime: { $gte: timeStart, $lte: timeEnd} 
			})
			.sort({fetchTime: -1});
		},

		lighthousedata: async(root, options) => {
			const  { finalUrl, fetchTimeStart, fetchTimeEnd, project, phase, brand } = options;
			var timeEnd = fetchTimeEnd;
			var timeStart = fetchTimeStart;

			for(let prop in options){
				if(prop === ''){
					delete prop;
				}
			}

			const newOptions = Object.fromEntries(Object.entries(options)
				.filter(arr => {
					console.log(arr[0]);
					return (arr[1] !== "" && arr[0] !== "fetchTimeStart" && arr[0] !== "fetchTimeEnd")  
				}));

			console.log(newOptions);

			if(timeStart === undefined || timeStart == "")
			{
				timeStart = new Date(0000000000000);
				console.log(timeStart)
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
				console.log(timeStart)
			}
			if(timeEnd === undefined || timeEnd == "")
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(timeEnd));
				console.log(timeEnd);
			}
			console.log("timeEndyopyoy: " + timeEnd);

			return await LighthouseData
			.find({
				...newOptions,
				fetchTime: { $lte : timeEnd, $gte: timeStart} 
			})
			.sort({fetchTime: -1});

			// if(finalUrl === undefined || finalUrl == "")
			// {
			// 	return await LighthouseData.find({
			// 		...nonNullOptions,
			// 		fetchTime: { $lte : timeEnd, $gte: timeStart} 
			// 	}).sort({fetchTime: -1});	
			// }

			// else
			// {
			// 	return await LighthouseData.find({
			// 		finalUrl: finalUrl, 
			// 		fetchTime: { $lte : timeEnd, $gte: timeStart} }).sort({fetchTime: -1});
			// }
		},

		average: async (root, options) => {

			const  { finalUrl, fetchTimeStart, fetchTimeEnd, project, phase, brand } = options;
			var timeEnd = fetchTimeEnd;
			var timeStart = fetchTimeStart;

			for(let prop in options){
				if(prop === ''){
					delete prop;
				}
			}

			const newOptions = Object.fromEntries(Object.entries(options)
				.filter(arr => {
					console.log(arr[0]);
					return (arr[1] !== "" && arr[0] !== "fetchTimeStart" && arr[0] !== "fetchTimeEnd")  
				}));

			console.log(newOptions);

			if(timeStart === undefined || timeStart == "")
			{
				timeStart = new Date(0000000000000);
				console.log(timeStart)
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
				console.log(timeStart)
			}
			if(timeEnd === undefined || timeEnd == "")
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(timeEnd));
				console.log(timeEnd);
			}

			return await LighthouseData.aggregate(
				[
				{
					$match: {
						...newOptions,
						fetchTime: { $lte : timeEnd, $gte: timeStart}
					}
				},
				{
					$group: { 
						_id : { month: { $month: "$fetchTime" }, day: { $dayOfMonth: "$fetchTime" }, year: { $year: "$fetchTime" } },
						performanceAverage: {  $avg: "$audits.performance_audits.score"  },
						seoAverage: { $avg: "$audits.seo_audits.score"  },
						bestPracticesAverage: { $avg: "$audits.best_practices_audits.score" },
						pwaAverage: { $avg: "$audits.pwa_audits.score" },
						accessibilityAverage: { $avg: "$audits.accessibility_audits.score"}
					}
				},
				{
					$project: {
						_id: 0,
						fetchDate: "$_id",
						performanceAverage: 1,
						seoAverage: 1,
						bestPracticesAverage: 1,
						pwaAverage: 1,
						accessibilityAverage: 1
					}
				}
				]
				);

		},

		recommendation: async() => {
			return defaultRecommendationData;
		},

		alerts: async() =>{
//			console.log(defaultAlertData);
			return defaultAlertData;
			Request.get("http://10.150.229.236:8080/lighthouse/alert", (error, response, body) => {
			    if(error) {
		        return console.dir(error);
    	}
	    console.dir(JSON.parse(body));
			    return JSON.parse(body);
});
		},
	}
}

module.exports = resolversPerformance