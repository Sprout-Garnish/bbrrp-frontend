import { useMutation } from "@apollo/client";
import {
  CreateReservationDocument,
  CreateReservationMutation,
  CreateReservationMutationVariables,
} from "@modules/client/graphql/generated/schema";

export const useCreateReservation = () => {
  const [createReservation, { loading, data, error }] = useMutation<
    CreateReservationMutation,
    CreateReservationMutationVariables
  >(CreateReservationDocument);

  return {
    createReservation,
    data,
    error,
    loading,
    success: !error && !loading,
  };
};
