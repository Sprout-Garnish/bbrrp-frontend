import { useQuery } from "@apollo/client";
import { RESTAURANTS_QUERY } from "../../graphql/restaurant/restaurants";
import {
  RestaurantsQuery,
  RestaurantsQueryVariables,
} from "../../interfaces/RestaurantsQuery";

export const useRestaurants = (options?: RestaurantsQueryVariables) => {
  const { data, loading, refetch, error } = useQuery<
    RestaurantsQuery,
    RestaurantsQueryVariables
  >(RESTAURANTS_QUERY, { variables: options });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
