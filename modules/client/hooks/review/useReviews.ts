import { useQuery } from "@apollo/client";
import {
  ReviewsDocument,
  ReviewsQuery,
  ReviewsQueryVariables,
} from "@modules/client/graphql/generated/schema";

export const useReviews = (options?: ReviewsQueryVariables) => {
  const { data, loading, refetch, error } = useQuery<
    ReviewsQuery,
    ReviewsQueryVariables
  >(ReviewsDocument, { variables: options });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
