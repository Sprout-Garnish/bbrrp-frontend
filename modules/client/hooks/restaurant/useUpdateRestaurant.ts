import { useMutation } from "@apollo/client";
import { UPDATE_RESTAURANT_MUTATION } from "@modules/client/graphql/restaurant/update-restaurant";
import {
  UpdateRestaurantMutation,
  UpdateRestaurantMutationVariables,
} from "@modules/client/interfaces/UpdateRestaurantMutation";

export const useUpdateRestaurant = () => {
  const [updateRestaurant, { loading, data, error }] = useMutation<
    UpdateRestaurantMutation,
    UpdateRestaurantMutationVariables
  >(UPDATE_RESTAURANT_MUTATION);

  return {
    updateRestaurant,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
