import { request, gql } from "graphql-request";
import {
    useQuery,
} from "react-query";

const endpoint = 'http://localhost:4000/graphql';

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
