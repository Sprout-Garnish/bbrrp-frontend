import { useQuery } from "@apollo/client";
import {
  ReservationsDocument,
  ReservationsQuery,
  ReservationsQueryVariables,
} from "@modules/client/graphql/generated/schema";

export const useReservations = (options?: ReservationsQueryVariables) => {
  const { data, loading, refetch, error } = useQuery<
    ReservationsQuery,
    ReservationsQueryVariables
  >(ReservationsDocument, { variables: options });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
