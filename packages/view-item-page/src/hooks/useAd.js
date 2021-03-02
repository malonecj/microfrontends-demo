import { request, gql } from "graphql-request";
import {
    useQuery,
} from "react-query";

function useAd(adId) {
    return useQuery(
        ["ad", adId],
        async () => {
            const { ad } = await request(
                GRAPH_QL_ENDPOINT,
                gql`
          query {
            ad(id: ${adId}) {
                title
                imageUrl
                price
                location
                category
            }
          }
          `
            );

            return ad;
        },
        {
            enabled: !!adId,
        }
    );
}

export default useAd;
