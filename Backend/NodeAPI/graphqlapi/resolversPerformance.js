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

		LD: async(root, { finalUrl }) => {
			//console.log(finalUrl);
			return await LighthouseData.find({finalUrl: finalUrl}).exec();
			/*LighthouseData.find({finalUrl: finalUrl}).exec(function(err, data){
				console.log(LighthouseData.find({}).exec());
				if(err) return next(err);
				console.log(data);
				console.log(finalUrl)
				return LighthouseData.find({}).exec();
			});*/

		}
	}
}

module.exports = resolversPerformance