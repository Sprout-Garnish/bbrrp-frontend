/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantWhereUniqueInput, RestaurantUpdateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateRestaurantMutation
// ====================================================

export interface UpdateRestaurantMutation_updateRestaurant {
  __typename: "Restaurant";
  id: string;
  name: string | null;
}

export interface UpdateRestaurantMutation {
  updateRestaurant: UpdateRestaurantMutation_updateRestaurant | null;
}

export interface UpdateRestaurantMutationVariables {
  where: RestaurantWhereUniqueInput;
  data: RestaurantUpdateInput;
}
