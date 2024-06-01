const { AuthenticationError, signToken } = require('apollo-server-express');
const{User} = require("../models")

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
    addUser: async (args) =>{
      const user=await User.create(args)
      const token= signToken(user)
      return{token, user}
    }
  },
};

module.exports = { resolvers };


