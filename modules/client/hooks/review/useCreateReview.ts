import {useMutation} from "@apollo/client";
import {CREATE_REIVEW_MUTATION} from "@modules/client/graphql/reviews/create-review";


export const useCreateReview = () => {
    const [createReview, {loading,data,error}] = useMutation(CREATE_REIVEW_MUTATION);

    return {
        createReview,
        data,
        error,
        loading,
        success: !error && !loading,
    };
};