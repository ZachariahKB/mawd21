import { gql } from "@apollo/client"
export const Add_user = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
addUser( username:$username, email:$email, password:$password){
token
user{
_id
username

}
}
}
`

export const Login_user = gql `
mutation loginUser($email: String!, $password: String!){
    loginUser(email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
}
`

export const Save_book = gql`
mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData){
        _id
        username
        email
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}
`
//Add mutation to remove saved book