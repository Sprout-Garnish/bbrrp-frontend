import { useQuery } from "@apollo/client";
import { ReviewDocument, ReviewQuery, ReviewQueryVariables } from "@modules/client/graphql/generated/schema";

export const useReview = (id: string) => {
    const { data, loading, refetch, error } = useQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, { variables: { where: { id } } });
  
    return {
      data,
      loading,
      refetch,
      error,
      success: !error && !loading,
    };
  };