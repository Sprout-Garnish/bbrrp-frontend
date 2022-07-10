import { useQuery } from "@apollo/client";
import { RestaurantsDocument, RestaurantsQuery, RestaurantsQueryVariables } from "@modules/client/graphql/generated/schema";

export const useRestaurants = (options?: RestaurantsQueryVariables) => {
  const { data, loading, refetch, error } = useQuery<
    RestaurantsQuery,
    RestaurantsQueryVariables
  >(RestaurantsDocument, { variables: options });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
