const { AuthenticationError, signToken } = require('../utils/auth.js');
const{User} = require("../models")

const resolvers = {
  Query: {
    user: async (_,__ ,{ user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in');
      }
      // Implement your logic here to fetch the user
      return getUserById(user._id); // replace with actual function
    },
  },
  Mutation: {
    addUser: async (parent, args) =>{
      const user=await User.create(args)
      const token= signToken(user)
      return{token, user}
    },
    loginUser: async (parent, args)=>{
      const user= await User.findOne ({email:args.email})
      if (!user){
        throw AuthenticationError
      }
      const passwordCheck= await user.isCorrectPassword(args.password)
      if(!passwordCheck){
        throw AuthenticationError
      }
      const token= signToken(user)
      return{token, user}
    }
    
  },
};

module.exports =  resolvers ;


