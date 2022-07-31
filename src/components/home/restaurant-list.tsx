import React from "react";
import RestaurantItem from "./restaurant-item";
import { useRestaurantsQuery } from "@modules/client/graphql/generated/schema";

const RestaurantList: React.FC = () => {
  const { data, loading, error } = useRestaurantsQuery();
  return (
    <div className="container">
      <div className="main">
        {/* 더 elegant한 로딩 컴포넌트 필요함 */}
        {loading && <div>Loading...</div>}
        {/* 더 elegant한 에러 컴포넌트 + 에러 핸들링 로직이 필요함 */}
        {!loading && error && <div>Error!</div>}
        {/* 더 elegant한 No items 핸들링이 필요함 */}
        {!loading && !error && data?.restaurants?.length === 0 && (
          <div>No Items!</div>
        )}
        {!loading &&
          !error &&
          data?.restaurants?.map((restaurant, index) => (
            <RestaurantItem key={`RestaurantItem${index}`} {...restaurant} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantList;
