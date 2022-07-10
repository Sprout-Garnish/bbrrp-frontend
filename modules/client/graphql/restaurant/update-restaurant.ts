import { gql } from "@apollo/client";

export const UPDATE_RESTAURANT_MUTATION = gql`
  mutation UpdateRestaurantMutation(
    $where: RestaurantWhereUniqueInput!
    $data: RestaurantUpdateInput!
  ) {
    updateRestaurant(where: $where, data: $data) {
      id
      name
    }
  }
`;
