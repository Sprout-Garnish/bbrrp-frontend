import { useMutation } from "@apollo/client";
import { UpdateRestaurantDocument, UpdateRestaurantMutation, UpdateRestaurantMutationVariables } from "@modules/client/graphql/generated/schema";

export const useUpdateRestaurant = () => {
  const [updateRestaurant, { loading, data, error }] = useMutation<
    UpdateRestaurantMutation,
    UpdateRestaurantMutationVariables
  >(UpdateRestaurantDocument);

  return {
    updateRestaurant,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
