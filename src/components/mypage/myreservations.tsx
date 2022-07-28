import React from "react";

const MyReservations = (props) => {
  const RestaurantCard = (props) => {
    return (
      <>
        <div className="bg-lemon font-semibold rounded-md text-khaki text-xl text-center w-52 mx-4 relative top-3">
          {props.reservation.time.slice(0, 10)}
          <br />
          {props.reservation.time.slice(11, 19)}
        </div>
        <div className="flex flex-col w-52 h-60 shadow-xl rounded-md m-4">
          <div style={{ flex: 5 }}>{props.reservation.restaurant.images}</div>
          <div style={{ flex: 1 }} className="">
            <div className="px-5 text-black text-left">
              <span className="font-semibold text-3xl">
                {props.reservation.restaurant.name}
              </span>
              <br />
              <span>{props.reservation.restaurant.category}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="text-2xl py-8 font-semibold">내 레스토랑 예약 내역</div>
      {props.data.user.reservations.map((reservation) => (
        <RestaurantCard reservation={reservation}></RestaurantCard>
      ))}
    </>
  );
};

export default MyReservations;
