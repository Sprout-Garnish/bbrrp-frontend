import { useMutation } from "@apollo/client";
import {
  DeleteReviewDocument,
  DeleteReviewMutation,
  DeleteReviewMutationVariables,
} from "@modules/client/graphql/generated/schema";

export const useDeleteReview = () => {
  const [deleteReview, { loading, data, error }] = useMutation<
    DeleteReviewMutation,
    DeleteReviewMutationVariables
  >(DeleteReviewDocument);

  return {
    deleteReview,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
