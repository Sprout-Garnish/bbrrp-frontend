import { gql } from "@apollo/client";

export const RESTAURANT_QUERY = gql`
  query RestaurantQuery($where: RestaurantWhereUniqueInput!) {
    restaurant(where: $where) {
      id
      name
      description
      location {
        lat
        lng
      }
      owner {
        id
        name
        nickname
        isAdmin
        phone
        email
        role
      }
      reservationPrice
      info
      images {
        id
        name
        description
        image {
          id
          filesize
          width
          height
          extension
          ref
          url
        }
      }
      imagesCount
      reviews {
        id
        user {
          id
          name
          nickname
          role
          isAdmin
        }
        images {
          id
          name
          description
          image {
            id
            filesize
            width
            height
            extension
            ref
            url
          }
        }
        imagesCount
        timestamp
        edited
        title
        content
        likes
      }
      reviewsCount
    }
  }
`;