import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o9s7531hf401xxe0dv7cbb/master",
  cache: new InMemoryCache(),
});
