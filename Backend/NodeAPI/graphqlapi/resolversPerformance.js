require('../config')
const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require('../models/LighthouseData').LighthouseData;

/*const defaultData = [
{
	id: 1,
	audits: {
		performance_audits: {
			first_contentful_paint: {
				score: 0.98,
				scoreDisplayMode: "numeric",
				numericValue: 1697.0700000000002,
				description: "First Contentful Paint marks the time at which the first text or image is painted"
			},
			first_meaningful_paint: {
				score: 0.96,
				scoreDisplayMode: "numeric",
				numericValue: 1928.6185,
				description: "First Meaningful Paint measures when the primary content of a page is visible"
			},
			speed_index: {
				score: 0.25,
				scoreDisplayMode: "numeric",
				numericValue: 7674.294955396518,
				description: "Speed Index shows how quickly the contents of a page are visibly populated"
			},
			interactive: {
				score: 0.05,
				scoreDisplayMode: "numeric",
				numericValue: 16917.189,
				description: "Time to interactive is the amount of time it takes for the page to become fully interactive",
				weight: 5
			},
			score: 0.5
		}
	},
	fetchTime: "2019-06-19",
	requestedUrl: "https://www.w3schools.com/python/python_file_open.asp",
	finalUrl: "https://www.w3schools.com/python/python_file_open.asp",
	runWarnings: [],
	lighthouseVersion: "5.1.0"
},



{
	id: 2,
	audits: {
		performance_audits: {
			first_contentful_paint: {
				score: 0.98,
				scoreDisplayMode: "numeric",
				numericValue: 1697.0700000000002,
				description: "First Contentful Paint marks the time at which the first text or image is painted"
			},
			first_meaningful_paint: {
				score: 0.96,
				scoreDisplayMode: "numeric",
				numericValue: 1928.6185,
				description: "First Meaningful Paint measures when the primary content of a page is visible"
			},
			speed_index: {
				score: 0.25,
				scoreDisplayMode: "numeric",
				numericValue: 7674.294955396518,
				description: "Speed Index shows how quickly the contents of a page are visibly populated"
			},
			interactive: {
				score: 0.05,
				scoreDisplayMode: "numeric",
				numericValue: 16917.189,
				description: "Time to interactive is the amount of time it takes for the page to become fully interactive",
				weight: 5
			},
			score: 0.5
		}
	},
	fetchTime: "2019-06-19",
	requestedUrl: "https://www.w3schools.com/python/python_file_open.asp",
	finalUrl: "https://www.w3schools.com/python/python_file_open.asp",
	runWarnings: [],
	lighthouseVersion: "5.1.0"
}	
]*/

const resolversPerformance = {
	Query: {
		lighthousedata: async () => {
			await LighthouseData.find({}).exec()
		},
		data: (root, { id }) => {
			return defaultData.filter(character => {
				return(character.id = id)
			})[0]
		}

	}
}

module.exports = resolversPerformance