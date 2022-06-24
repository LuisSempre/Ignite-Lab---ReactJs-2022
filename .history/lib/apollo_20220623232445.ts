// import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   // uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9s7531hf401xxe0dv7cbb/master',
//   uri: "https://api-sa-east-1.graphcms.com/v2/cl4ljcdt56mom01yrdswgf7n9/master",
//   cache: new InMemoryCache(),
// });


import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4n4k5w68h3x01yra00r5rzf/master',
  cache: new InMemoryCache(),
})
