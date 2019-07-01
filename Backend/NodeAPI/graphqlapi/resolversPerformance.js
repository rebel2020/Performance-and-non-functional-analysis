const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;

const defaultAverageData = [
{
	"performanceAverage": 5.2,
	"seoAverage": 5.2,
	"pwaAverage" : 1.2,
	"bestPracticesAverage": 1.6,
	"fetchDate": "27th May"
}, 
{
	"performanceAverage": 5.2,
	"seoAverage": 5.2,
	"pwaAverage" : 1.2,
	"bestPracticesAverage": 1.6,
	"fetchDate": "28th May"
}
]

const resolversPerformance = {
	Query: {
		allLighthousedata: async () => {
			//console.log(await LighthouseData.find({}).exec());
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
		average: async () => {
				
				const q = await LighthouseData.aggregate(
						[
							{
								$group: { _id : { month: { $month: "$fetchTime" }, day: { $dayOfMonth: "$fetchTime" }, year: { $year: "$fetchTime" } } }
							}
						]
					);
				console.log(q);
				
			return defaultAverageData;	
		}
	}
}

module.exports = resolversPerformance