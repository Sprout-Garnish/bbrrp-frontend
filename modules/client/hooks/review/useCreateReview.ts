import { useMutation } from "@apollo/client";
import {
  CreateReviewDocument,
  CreateReviewMutation,
  CreateReviewMutationVariables,
} from "@modules/client/graphql/generated/schema";

export const useCreateReview = () => {
  const [createReview, { loading, data, error }] = useMutation<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >(CreateReviewDocument);

  return {
    createReview,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
