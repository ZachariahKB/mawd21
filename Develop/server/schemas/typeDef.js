const typeDefs =`
type User{
    _id: ID!
    username: String!
    email: String
    bookcount: Int
    savedBooks: [Book]
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
`