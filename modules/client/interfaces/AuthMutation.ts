/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AuthMutation
// ====================================================

export interface AuthMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item {
  __typename: "User";
  name: string | null;
  id: string;
}

export interface AuthMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess {
  __typename: "UserAuthenticationWithPasswordSuccess";
  sessionToken: string;
  item: AuthMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item;
}

export interface AuthMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure {
  __typename: "UserAuthenticationWithPasswordFailure";
  message: string;
}

export type AuthMutation_authenticateUserWithPassword = AuthMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess | AuthMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure;

export interface AuthMutation {
  authenticateUserWithPassword: AuthMutation_authenticateUserWithPassword | null;
}

export interface AuthMutationVariables {
  email: string;
  password: string;
}
