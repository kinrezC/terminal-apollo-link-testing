import React from "react";
import ApolloClient, {
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Swaps from "./components/UniswapDayData";

import { TerminalApolloLink, SourceType } from "@terminal-packages/sdk";

const cache = new InMemoryCache();

const defaultOptions = {
  pollInterval: 5000
};

const client = new ApolloClient({
  link: ApolloLink.from([
    new TerminalApolloLink({
      projectId: "WgvyJpoaALoqBkaZ",
      apiKey: "gfCK8jBGiFh5mU/vEh+elw==",
      source: SourceType.Terminal,
      uri: "https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap"
    }),
    new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap"
    })
  ]),
  defaultOptions: defaultOptions,
  cache: cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Swaps />
    </ApolloProvider>
  );
}

export default App;
