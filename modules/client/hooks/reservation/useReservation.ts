import { useQuery } from "@apollo/client";
import {
  ReservationDocument,
  ReservationQuery,
  ReservationQueryVariables,
} from "@modules/client/graphql/generated/schema";

export const useReservation = (id: string) => {
  const { data, loading, refetch, error } = useQuery<
    ReservationQuery,
    ReservationQueryVariables
  >(ReservationDocument, { variables: { where: { id } } });

  return {
    data,
    loading,
    refetch,
    error,
    success: !error && !loading,
  };
};
