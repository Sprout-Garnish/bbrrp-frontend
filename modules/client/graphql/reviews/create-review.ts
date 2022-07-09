import { gql } from "@apollo/client";

export const CREATE_REIVEW_MUTATION = gql`
mutation CreateReviewMutation($data: ReviewCreateInput!){
    createReview(data: $data){
        id
        title
        content
    }
}
`;