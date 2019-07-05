const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;

const defaultRecommendationData = 
{
	"PerformanceAuditRecommendations": {
		"first_contentful_paint": "1. Use in-line styles for above the fold content, /n2. Use an automated tool like penthouse and Apache’s mod_pagespeed to keep your site sustainably scalable,3. Reduce the scope and complexity of style calculations,4. If a style isn’t being used, remove it via Chrome Dev Tool’s built-in Code Coverage functionality",

		"first_meaningful_paint": "1. Load the resources needed for your above-the-fold content before you load scripts necessary for offscreen elements, /n2. Ditch the fancy fonts or include a fallback font",

		"speed_index": "1. Minimize main-thread work,/n2. educe JavaScript execution time,/n3. Minimize Critical Requests Depth,/n 4. Eliminate Render-Blocking Resources,/n 5. Defer offscreen images",

		"interactive": "1. Defer or remove unnecessary JavaScript work that occurs during page load,/n2. Optimize JavaScript Bootup,/n3. Reduce JavaScript Payloads with Tree Shaking,/n4. Reduce JavaScript Payloads with Code Splitting",
		"first_cpu_idle": "1. Minimize the number of required resources that must be downloaded and executed before a page can load, /n2. Reduce the size of required resources"

	},

	"SEOAuditRecommendations": {
		"abc": "xyz",
		"ijk": "mln"
	}
};


const resolversPerformance = {
	Query: {
		allLighthousedata: async () => {
			return await LighthouseData.find({}).exec();
		},

		gatlingdata: async() => {
			return await GatlingData.find({}).exec();
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
				}
				]
				);

		},

		recommendation: async() => {
			return defaultRecommendationData;
		},
	}
}

module.exports = resolversPerformance