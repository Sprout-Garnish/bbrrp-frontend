import { useMutation } from "@apollo/client";
import { UPDATE_REVIEW_MUTATION } from "@modules/client/graphql/reviews/update-review";

export const useUpdateRestaurant = () => {
    const [updateRestaurant, { loading, data, error }] = useMutation(UPDATE_REVIEW_MUTATION);
  
    return {
      updateRestaurant,
      data,
      error,
      loading,
      success: !error && !loading,
    };
  };
  