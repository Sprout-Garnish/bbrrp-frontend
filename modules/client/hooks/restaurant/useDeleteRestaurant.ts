import { useMutation } from "@apollo/client";
import { DELETE_RESTAURANT_MUTATION } from "@modules/client/graphql/restaurant/delete-restaurant";
import {
  DeleteRestaurantMutation,
  DeleteRestaurantMutationVariables,
} from "@modules/client/interfaces/DeleteRestaurantMutation";

export const useDeleteRestaurant = () => {
  const [deleteRestaurant, { loading, data, error }] = useMutation<
    DeleteRestaurantMutation,
    DeleteRestaurantMutationVariables
  >(DELETE_RESTAURANT_MUTATION);

  return {
    deleteRestaurant,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
