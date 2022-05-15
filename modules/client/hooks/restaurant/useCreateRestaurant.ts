import { useMutation } from "@apollo/client";
import { CREATE_RESTAURANT_MUTATION } from "@modules/client/graphql/restaurant/create-restaurant";
import {
  CreateRestaurantMutation,
  CreateRestaurantMutationVariables,
} from "@modules/client/interfaces/CreateRestaurantMutation";

export const useCreateRestaurant = () => {
  const [createRestaurant, { loading, data, error }] = useMutation<
    CreateRestaurantMutation,
    CreateRestaurantMutationVariables
  >(CREATE_RESTAURANT_MUTATION);

  return {
    createRestaurant,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
