import React, { useEffect } from "react";
import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import { NextScript } from "next/document";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Location = typeof __restaurant["location"];

interface DetailLocationProps {
  location: Location;
}

const DetailLocation: React.FC<DetailLocationProps> = ({ location }) => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("mapUnique");
        const options = {
          center: new window.kakao.maps.LatLng(location?.lat, location?.lng),
          level: 8,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          location?.lat,
          location?.lng
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [location]);

  return (
    <>
      <p className="text-black mx-2 mt-2 font-bold text-xl">위치</p>
      <div id="mapUnique" className="w-80 h-48 mx-2 mt-2 border-2" />
    </>
  );
};

export default DetailLocation;
