import { useMutation } from "@apollo/client";
import {
  UpdateReservationDocument,
  UpdateReservationMutation,
  UpdateReservationMutationVariables,
} from "@modules/client/graphql/generated/schema";

export const useUpdateReservation = () => {
  const [updateReservation, { loading, data, error }] = useMutation<
    UpdateReservationMutation,
    UpdateReservationMutationVariables
  >(UpdateReservationDocument);

  return {
    updateReservation,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
