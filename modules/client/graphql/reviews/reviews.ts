import { gql } from "@apollo/client";
import "graphql";

export const REVIEWS_QUERY = gql`
  query ReviewsQuery(
    $where: ReviewWhereInput! = {}
    $orderBy: [ReviewOrderByInput!]! = []
    $take: Int
    $skip: Int! = 0
  ) {
    reviews(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
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
  }
`;
