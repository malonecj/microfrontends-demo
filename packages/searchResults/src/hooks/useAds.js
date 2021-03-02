import { request, gql } from "graphql-request";
import {
    useQuery,
} from "react-query";

function useAds(category) {

    return useQuery(["ads", category], async () => {
        const result = await request(
            GRAPH_QL_ENDPOINT,
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
    }, {
        refetchOnWindowFocus: false
    });
}

export default useAds;
