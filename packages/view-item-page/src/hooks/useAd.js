import { request, gql } from "graphql-request";
import {
    useQuery,
} from "react-query";

const endpoint = process.env.apiEndpoint || 'http://localhost:8888/';

function useAd(adId) {
    return useQuery(
        ["ad", adId],
        async () => {
            const { ad } = await request(
                endpoint,
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
