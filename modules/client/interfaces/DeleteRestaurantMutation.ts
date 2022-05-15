/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantWhereUniqueInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteRestaurantMutation
// ====================================================

export interface DeleteRestaurantMutation_deleteRestaurant {
  __typename: "Restaurant";
  id: string;
  name: string | null;
}

export interface DeleteRestaurantMutation {
  deleteRestaurant: DeleteRestaurantMutation_deleteRestaurant | null;
}

export interface DeleteRestaurantMutationVariables {
  where: RestaurantWhereUniqueInput;
}
