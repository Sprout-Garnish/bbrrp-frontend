import { useMutation } from "@apollo/client";
import { DELETE_REVIEW_MUTATION } from "@modules/client/graphql/reviews/delete-review";

export const useDeleteRestaurant = () => {
  const [deleteReview, { loading, data, error }] = useMutation(DELETE_REVIEW_MUTATION);

  return {
    deleteReview,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};