const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;

const resolversPerformance = {
	Query: {
		allLighthousedata: async () => {
			//console.log(await LighthouseData.find({}).exec());
			return await LighthouseData.find({}).exec();
		},

		gatlingdata: async() => {
			return await GatlingData.find({}).exec();
		},

		lighthousedata: async(root, { finalUrl, fetchTimeStart, fetchTimeEnd }) => {

			var timeEnd = fetchTimeEnd;
			var timeStart = fetchTimeStart;
			if(timeStart === undefined)
			{
				timeStart = new Date(0000000000000);
				console.log(timeStart)
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
				console.log(timeStart)
			}
			if(timeEnd === undefined)
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(fetchTimeEnd));
				console.log(timeEnd);
			}

			if(finalUrl === undefined)
			{
				return await LighthouseData.find({fetchTime: { $lte : timeEnd, $gte: timeStart} });	
			}

			else
			{
				return await LighthouseData.find({finalUrl: finalUrl, fetchTime: { $lte : timeEnd, $gte: timeStart} });
			}
			
		}
	}
}

module.exports = resolversPerformance