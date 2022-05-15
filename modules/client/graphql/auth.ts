import { gql } from "@apollo/client";

export const AUTH_MUTATION = gql`
  mutation AuthMutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      __typename
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          name
          id
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
