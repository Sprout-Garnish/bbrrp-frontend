import { useQuery } from "@apollo/client";
import { RESTAURANT_QUERY } from "@modules/client/graphql/restaurant/restaurant";
import {
  RestaurantQuery,
  RestaurantQueryVariables,
} from "../../interfaces/RestaurantQuery";

export const useRestaurant = (id: string) => {
  const { data, loading, refetch, error } = useQuery<
    RestaurantQuery,
    RestaurantQueryVariables
  >(RESTAURANT_QUERY, { variables: { where: { id } } });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
