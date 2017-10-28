import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cj9b3m21m3ha40163f43bbldf"
  }),
  cache: new InMemoryCache()
});

export default client;
