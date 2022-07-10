import { useMutation } from "@apollo/client";
import { CreateRestaurantDocument, CreateRestaurantMutation, CreateRestaurantMutationVariables } from "@modules/client/graphql/generated/schema";

export const useCreateRestaurant = () => {
  const [createRestaurant, { loading, data, error }] = useMutation<
    CreateRestaurantMutation,
    CreateRestaurantMutationVariables
  >(CreateRestaurantDocument);

  return {
    createRestaurant,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
