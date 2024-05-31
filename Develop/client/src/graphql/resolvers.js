const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (_, __, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in');
      }
      // Implement your logic here to fetch the user
      return getUserById(user._id); // replace with actual function
    },
  },
  Mutation: {
    updateUser: async (_, { input }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in');
      }
      // Implement your logic here to update the user
      return updateUser(user._id, input); // replace with actual function
    },
  },
};

module.exports = { resolvers };


