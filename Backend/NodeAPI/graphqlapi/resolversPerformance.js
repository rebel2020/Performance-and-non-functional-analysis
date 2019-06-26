const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;

const resolversPerformance = {
	Query: {
		lighthousedata: async () => {
			//console.log(await LighthouseData.find({}).exec());
			return await LighthouseData.find({}).exec();
		},

		gatlingdata: async() => {
			return await GatlingData.find({}).exec();
		},

		LD: async(root, { finalUrl, requestedUrl }) => {
			console.log(requestedUrl);
			return await LighthouseData.find({finalUrl: finalUrl, requestedUrl: requestedUrl}).exec();
			/*LighthouseData.find({finalUrl: finalUrl}).exec(function(err, data){
				console.log(LighthouseData.find({}).exec());
				if(err) return next(err);
				console.log(data);
				console.log(finalUrl)
				return LighthouseData.find({}).exec();
			});*/

		},

		LDFilter: async(root, { finalUrl, fetchTimeStart, fetchTimeEnd }) => {
			var t1 = new Date(parseInt(fetchTimeStart));
			var t2 = new Date(parseInt(fetchTimeEnd));
			console.log(finalUrl);
			console.log(t1);
			console.log(t2);
			return await LighthouseData.find({finalUrl: finalUrl, fetchTime: { $lte : t1, $gte: t2} });
		}
	}
}

module.exports = resolversPerformance