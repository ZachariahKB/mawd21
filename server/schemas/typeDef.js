const typeDefs =`
type User{
    _id: ID!
    username: String!
    email: String
    bookcount: Int
    savedBooks: [Book]
}
type Auth {
    token: ID!
    user: User
  }


type Book{
    bookID: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
}
type Mutation{
    addUser(username:String!, email:String!, password:String!): Auth
}
type Query {
    user: User
}
`
module.exports=typeDefs