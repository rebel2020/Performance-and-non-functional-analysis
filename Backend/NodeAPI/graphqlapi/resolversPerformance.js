const defaultData = [
{
	id: 1,
	"requestedUrl": "https://www.w3schools.com/python/python_file_open.asp",
	"finalUrl": "https://www.w3schools.com/python/python_file_open.asp",
	"runWarnings": [],
	"lighthouseVersion": "5.1.0"
	
},
{
	id: 2,
	"requestedUrl": "https://www.w3schools.com/python/python_file_open.asp",
	"finalUrl": "https://www.w3schools.com/python/python_file_open.asp",
	"runWarnings": [],
	"lighthouseVersion": "5.1.0"
	
}
]

const resolversPerformance = {
	Query: {
		alldata: () => {
			return defaultData
		},
		data: (root, { id }) => {
			return defaultData.filter(character => {
				return(character.id = id)
			})[0]
		}

	}
}

module.exports = resolversPerformance