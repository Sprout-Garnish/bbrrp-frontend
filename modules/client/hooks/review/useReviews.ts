import { useQuery } from "@apollo/client";
import { REVIEWS_QUERY } from "../../graphql/reviews/reviews";

//응애 options type모르겠어
export const useRestaurants = (options?: any) => {
    const { data, loading, refetch, error } = useQuery(REVIEWS_QUERY, { variables: options });
  
    return {
      data,
      loading,
      refetch,
      error,
      success: !error && !loading,
    };
  };