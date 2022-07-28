import React from "react";

const MyReservations = (props) => {
  const RestaurantCard = (props) => {
    return (
      <>
        <div className="flex flex-col w-52 h-60 border-2 rounded-md">
          <div style={{ flex: 5 }}>{props.reservation.restaurant.images}</div>
          <hr />
          <div style={{ flex: 1 }} className="bg-lemon">
            <div className="text-black text-center">
              {props.reservation.restaurant.name}
              <br />
              {props.reservation.restaurant.category}
            </div>
          </div>
          <div style={{ flex: 1 }} className="bg-lemon text-black text-center">
            {props.reservation.time}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {props.data.user.reservations.map((reservation) => (
        <RestaurantCard reservation={reservation}></RestaurantCard>
      ))}
    </>
  );
};

export default MyReservations;
