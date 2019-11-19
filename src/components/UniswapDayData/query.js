import gql from "graphql-tag";

export const GET_UNISWAPS = gql`
  query Uniswaps($first: Int) {
    uniswaps(first: $first) {
      id
      exchangeCount
      exchanges {
        id
      }
      totalVolumeInEth
    }
  }
`;

