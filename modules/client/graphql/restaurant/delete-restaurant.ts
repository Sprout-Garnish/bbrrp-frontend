import { gql } from "@apollo/client";

export const DELETE_RESTAURANT_MUTATION = gql`
  mutation DeleteRestaurantMutation($where: RestaurantWhereUniqueInput!) {
    deleteRestaurant(where: $where) {
      id
      name
    }
  }
`;
