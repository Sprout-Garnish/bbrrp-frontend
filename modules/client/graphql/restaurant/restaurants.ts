import { gql } from "@apollo/client";
import "graphql";

export const RESTAURANTS_QUERY = gql`
  query RestaurantsQuery(
    $where: RestaurantWhereInput! = {}
    $orderBy: [RestaurantOrderByInput!]! = []
    $take: Int
    $skip: Int! = 0
  ) {
    restaurants(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      name
      description
      location {
        lat
        lng
      }
      category
      owner {
        id
        nickname
      }
      reservationPrice
      reviewsCount
      info
      reviewsCount
      images {
        id
        name
        image {
          id
          extension
          ref
          url
        }
      }
    }
  }
`;
