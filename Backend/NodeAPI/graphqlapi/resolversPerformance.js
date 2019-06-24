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

		singleLD: (root, { id }) => {
			return defaultData.filter(character => {
				return(character.id = id)
			})[0]
		}

	}
}

module.exports = resolversPerformance