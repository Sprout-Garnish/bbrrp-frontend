import { gql } from "@apollo/client";

export const UPDATE_REVIEW_MUTATION = gql`
  mutation UpdateReviewMutation(
    $where: ReviewWhereUniqueInput!
    $data: ReviewUpdateInput!
  ) {
    updateReview(where: $where, data: $data) {
      id
      name
    }
  }
`;