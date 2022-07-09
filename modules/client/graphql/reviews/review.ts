import { gql } from "@apollo/client";

export const REVIEW_QUERY = gql`
  query ReviewQuery($where: ReviewWhereUniqueInput!) {
    review(where: $where) {
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