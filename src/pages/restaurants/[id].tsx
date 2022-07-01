import React from "react";
import "@src/components/restaurant-detail/detail-images";
import DetailImages from "@src/components/restaurant-detail/detail-images";
import DetailInfo from "@src/components/restaurant-detail/detail-info";
import DetailPrice from "@src/components/restaurant-detail/detail-price";
import "@src/components/restaurant-detail/detail-bookbutton";
import "@src/components/restaurant-detail/detail-review";
import { faker } from "@faker-js/faker";
import DetailBookButton from "@src/components/restaurant-detail/detail-bookbutton";
import DetailReview from "@src/components/restaurant-detail/detail-review";

const mockData = {
  id: 1,
  name: "오이오이",
  description: faker.lorem.sentence(),
  location_raw: "서울특별시",
  category: "일식",
  owner: "김만덕",
  reservation_price: 10000,
  info: faker.lorem.sentence(),
  images: [
    {
      id: 1,
      name: "식당 내부",
      description: "깔끔한 내부",
      image: <img src="https://picsum.photos/200/300?random=1" />,
    },
    {
      id: 2,
      name: "주방",
      description: "위생적인 주방",
      image: <img src="https://picsum.photos/200/300?random=2" />,
    },
  ],
  reviews: [
    {
      id: 1,
      user: "김민경",
      images: [
        {
          id: 1,
          name: "당고",
          description: "달고 쫄깃몰캉 맛있어",
          image: <img src="https://picsum.photos/100/100?random=3" />,
        },
        {
          id: 2,
          name: "녹차",
          description: "쌉싸름하니 맛있어",
          image: <img src="https://picsum.photos/100/100?random=4" />,
        },
      ],
      timestamp: "2022-07-01",
      edited: true,
      title: "리뷰1 제목",
      content: "당고 집에 갔다. 음식이 맛있었다.",
      likes: 3,
      restaurant_id: 1,
    },
    {
      id: 2,
      user: "김준형",
      images: [
        {
          id: 1,
          name: "가라야케",
          description: "바삭바삭 맛있어!!",
          image: <img src="https://picsum.photos/100/100?random=5" />,
        },
        {
          id: 2,
          name: "카레",
          description: "인도향이 나니 맛있어!!!!",
          image: <img src="https://picsum.photos/100/100?random=6" />,
        },
      ],
      timestamp: "2022-07-02",
      edited: true,
      title: "리뷰2 제목",
      content: "카레 집에 갔다. 주인 분이 친절하셨다.",
      likes: 2,
      restaurant_id: 1,
    },
  ],
};

const RestaurantDetail = () => {
  return (
    <>
      <DetailImages images={mockData.images} />
      <DetailBookButton />
      <DetailInfo
        id={mockData.id}
        name={mockData.name}
        description={mockData.description}
        location_raw={mockData.location_raw}
        category={mockData.category}
        owner={mockData.owner}
      />
      <DetailPrice
        id={mockData.id}
        reservation_price={mockData.reservation_price}
        info={mockData.info}
      />
      <DetailReview reviews={mockData.reviews} />
    </>
  );
};

export default RestaurantDetail;
