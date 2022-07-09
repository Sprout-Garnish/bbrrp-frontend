import { useQuery } from "@apollo/client";
import { REVIEW_QUERY } from "@modules/client/graphql/reviews/review";

export const useResview = (id: string) => {
    const { data, loading, refetch, error } = useQuery(REVIEW_QUERY, { variables: { where: { id } } });
  
    return {
      data,
      loading,
      refetch,
      error,
      success: !error && !loading,
    };
  };