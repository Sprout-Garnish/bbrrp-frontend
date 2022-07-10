import { useQuery } from "@apollo/client";
import { RestaurantDocument, RestaurantQuery, RestaurantQueryVariables } from "@modules/client/graphql/generated/schema";

export const useRestaurant = (id: string) => {
  const { data, loading, refetch, error } = useQuery<
    RestaurantQuery,
    RestaurantQueryVariables
  >(RestaurantDocument, { variables: { where: { id } } });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
