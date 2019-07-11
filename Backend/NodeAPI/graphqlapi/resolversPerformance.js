const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;
var Request = require("request");
const Alerts = require('../models/Alerts').Alerts
const Alert = require("../models/Alert").Alert
const RecommendationData = require("../models/RecommendationData").RecommendationData


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

const randomData = [{
    "recommend" : [ 
        {
            "audit" : "Performance_Audit",
            "recommendations" : [ 
                {
                    "name" : "speed_index",
                    "average_score" : 0.06,
                    "weight" : 4.0
                }, 
                {
                    "name" : "interactive",
                    "average_score" : 0.03,
                    "weight" : 5.0
                }
            ]
        }, 
        {
            "audit" : "Best_Practices_Audit",
            "recommendations" : [ 
                {
                    "name" : "is_on_https",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "uses_http2",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "no_document_write",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "external_anchors_use_rel_noopener",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "no_vulnerable_libraries",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "errors_in_console",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }
            ]
        }, 
        {
            "audit" : "Search_Engine_Optimization_Audit",
            "recommendations" : [ 
                {
                    "name" : "link_text",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "is_crawlable",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "image_alt",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }, 
                {
                    "name" : "canonical",
                    "average_score" : 0.0,
                    "weight" : 1.0
                }
            ]
        }, 
        {
            "audit" : "Accessibility_Audit",
            "recommendations" : [ 
                {
                    "name" : "meta_viewport",
                    "average_score" : 0.0,
                    "weight" : 10.0
                }
            ]
        }, 
        {
            "audit" : "Performance_Web_App_Audit",
            "recommendations" : [ 
                {
                    "name" : "load_fast_enough_for_pwa",
                    "average_score" : 0.0,
                    "weight" : 7.0
                }, 
                {
                    "name" : "works_offline",
                    "average_score" : 0.0,
                    "weight" : 5.0
                }
            ]
        }
    ]
}];

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

			// console.log(await LighthouseData.find({}).exec());

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

		recommendation: async() =>{
			return await RecommendationData.find();
		},

		alerts: async() =>{
			return await Alerts.find({}).exec();
		},

		recommendationDescription: async() =>{
			return defaultRecommendationData;
		}
	}
}

module.exports = resolversPerformance