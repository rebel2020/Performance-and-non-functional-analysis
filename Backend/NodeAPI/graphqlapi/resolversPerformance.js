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
		//console.log(await LighthouseData.find({}).exec());
		console.log(await RecommendationData.find({}).exec());
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

			console.log(await LighthouseData.find({}).exec());

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
		    console.log(await RecommendationData.find().exec());
			return randomData;
		},

		alerts: async() =>{
			return await Alerts.find({}).exec();
		},
	}
}

module.exports = resolversPerformance