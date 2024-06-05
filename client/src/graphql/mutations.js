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
