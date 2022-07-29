import { useMutation } from "@apollo/client";
import {
  DeleteRestaurantDocument,
  DeleteRestaurantMutation,
  DeleteRestaurantMutationVariables,
} from "@modules/client/graphql/generated/schema";

export const useDeleteRestaurant = () => {
  const [deleteRestaurant, { loading, data, error }] = useMutation<
    DeleteRestaurantMutation,
    DeleteRestaurantMutationVariables
  >(DeleteRestaurantDocument);

  return {
    deleteRestaurant,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
