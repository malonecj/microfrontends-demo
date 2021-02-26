import { request, gql } from "graphql-request";
import {
    useQuery,
} from "react-query";

const endpoint = 'http://localhost:4000/graphql';

function useAds(category) {

    return useQuery(["ads", category], async () => {
        const result = await request(
            endpoint,
            gql`
          query {
            ads(category: "${category}") {
                id
                title
                imageUrl
                price
                location
            }
          }
        `
        );
        return result.ads;
    });
}

export default useAds;
