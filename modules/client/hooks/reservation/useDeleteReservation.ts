import { useMutation } from "@apollo/client";
import {
  DeleteReservationDocument,
  DeleteReservationMutation,
  DeleteReservationMutationVariables,
} from "@modules/client/graphql/generated/schema";

export const useDeleteReservation = () => {
  const [deleteReservation, { loading, data, error }] = useMutation<
    DeleteReservationMutation,
    DeleteReservationMutationVariables
  >(DeleteReservationDocument);

  return {
    deleteReservation,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
