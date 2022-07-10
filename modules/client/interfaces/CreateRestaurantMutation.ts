/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateRestaurantMutation
// ====================================================

export interface CreateRestaurantMutation_createRestaurant {
  __typename: "Restaurant";
  id: string;
  name: string | null;
}

export interface CreateRestaurantMutation {
  createRestaurant: CreateRestaurantMutation_createRestaurant | null;
}

export interface CreateRestaurantMutationVariables {
  data: RestaurantCreateInput;
}
