import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login(
    $username: String! 
    $password: String!
  ) {
    login(data: {
      username: $username
      password: $password
    }) {
      key
      user {
        id
        username
      }
    }
  }
`
