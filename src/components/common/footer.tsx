import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-grey h-12 border-b-2 border-whitesmoke bottom-0"></div>
        <div className="w-full bg-grey h-28 relative">
          <span className="text-lemon absolute Georgia text-4xl left-12 top-3.5">
            LEMON TABLE
          </span>
          <span className="text-whitesmoke absolute text-base top-3 left-80">
            맛집에 관한 정보들을 알려주고 예약해주는 웹사이트
          </span>
          <span className="text-whitesmoke absolute text-base top-8 left-80">
            2022 Lemon Table Reservation
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
