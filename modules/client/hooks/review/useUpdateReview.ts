import { useMutation } from "@apollo/client";
import { UpdateReviewDocument, UpdateReviewMutation, UpdateReviewMutationVariables } from "@modules/client/graphql/generated/schema";

export const useUpdateReview = () => {
const [updateReview, { loading, data, error }] = useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument);
  
    return {
      updateReview,
      data,
      error,
      loading,
      success: !error && !loading,
    };
  };
  