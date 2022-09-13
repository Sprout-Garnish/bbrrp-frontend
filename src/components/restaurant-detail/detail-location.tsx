/* eslint-disable no-undef */
import React, { useEffect, useRef } from "react";
import { RestaurantQuery } from "@modules/client/graphql/generated/schema";

const onLoadKakaoMap = (location: Location) => {
  window.kakao.maps.load(() => {
    const container = document.getElementById("mapUnique");
    const options = {
      center: new window.kakao.maps.LatLng(location?.lat, location?.lng),
      level: 8,
    };
    const map = new window.kakao.maps.Map(container, options);
    const markerPosition = new window.kakao.maps.LatLng(
      location?.lng,
      location?.lat
    );
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    map.setCenter(markerPosition);
  });
};

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Location = typeof __restaurant["location"];

interface DetailLocationProps {
  location: Location;
}

const DetailLocation: React.FC<DetailLocationProps> = ({ location }) => {
  const mapScript = useRef<HTMLScriptElement>();

  useEffect(() => {
    (async () => {
      mapScript.current = document.createElement("script");

      mapScript.current.async = true;
      mapScript.current.type = "text/javascript";
      mapScript.current.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

      document.head.appendChild(mapScript.current);
    })();
  }, []);

  useEffect(() => {
    const mapLoader = () => onLoadKakaoMap(location);
    if (mapScript.current) {
      mapScript.current.addEventListener("load", mapLoader);
    }

    return () => {
      if (mapScript.current) {
        mapScript.current.removeEventListener("load", mapLoader);
      }
    };
  }, [location]);

  return (
    <>
      <p className="text-black mx-2 mt-2 font-bold text-xl">위치</p>
      <div id="mapUnique" className="w-80 h-48 mx-2 mt-2 border-2" />
    </>
  );
};

export default DetailLocation;
