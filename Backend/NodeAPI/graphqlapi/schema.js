const { gql } = require('apollo-server-express');

const typeDefs = gql`
		type Data{ 
			id: Int
			category: String
			}
			type Query {
				allData: [Data]
				data(id: Int!): Data
			}
		`;

module.exports = typeDefs
