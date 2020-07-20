import { buildSchema } from 'graphql';

export const graphQlSchema = buildSchema(`
        scalar Date

        type User {
            _id: ID!
            name: String
            email: String!
            password: String!
            salt: String!
            role: String!
            createdAt: Date
            updatedAt: Date
        }

        type RootQuery {
          me: User!
          allusers: [User]
        }


        schema {
            query: RootQuery
        }
  `);