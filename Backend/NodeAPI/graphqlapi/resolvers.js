const defaultData = [
{
	id: 1
	
},
{
	id: 1	
}
]

const resolvers = {
	Query: {
		allData: () => {
			return defaultData
		},
		data: (root, { id }) => {
			return defaultData.filter(character => {
				return (character.id = id)
			})[0]
		}
	}
}

module.exports = resolvers