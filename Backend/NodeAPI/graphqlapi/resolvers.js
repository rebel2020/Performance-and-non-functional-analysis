const defaultData = [
{
	id: 1,
	category: "Lighthouse",
	value:"abc "
},
{
	id: 1,
	category: "Lighthouse",
	value:"xyzabc "
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