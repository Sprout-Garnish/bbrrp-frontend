import { gql } from "@apollo/client";

export const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReviewMutation($where: ReviewWhereUniqueInput!) {
    deleteReview(where: $where) {
      id
      name
    }
  }
`;
