import {
  useRestaurantQuery,
  UserQuery,
} from "@modules/client/graphql/generated/schema";
import React from "react";
import RestaurantCard from "../common/restaurant-card";

const __user: Partial<UserQuery> = {};
const __reservations = __user.user?.reservations;

type Reservations = NonNullable<typeof __reservations>;
type Reservation = Reservations[number];

const ReservationCard: React.FC<Reservation> = ({ time, restaurant }) => {
  const { data, error, loading } = useRestaurantQuery({
    variables: { where: { id: restaurant?.id } },
  });
  return (
    <>
      {loading && <div>로딩중...</div>}
      {!loading && (error || !data) && <div>에러가 발생했습니다.</div>}
      {!loading && !error && data?.restaurant && (
        <>
          <div className="bg-lemon font-semibold rounded-md text-khaki text-xl text-center w-52 mx-4 relative top-3">
            {time.slice(0, 10)}
            <br />
            {time.slice(11, 19)}
          </div>
          <RestaurantCard {...data.restaurant} />
        </>
      )}
    </>
  );
};

interface PMyReservations {
  reservations: Reservations;
}

const MyReservations: React.FC<PMyReservations> = ({ reservations }) => {
  return (
    <>
      <div className="text-2xl py-8 font-semibold">내 레스토랑 예약 내역</div>
      {reservations.map((reservation) => (
        <ReservationCard {...reservation} />
      ))}
    </>
  );
};

export default MyReservations;
