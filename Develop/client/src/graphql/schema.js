const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    user: User
  }

  input UpdateUserInput {
    username: String
    email: String
  }

  type Mutation {
    updateUser(input: UpdateUserInput): User
  }
`;

module.exports = { typeDefs };