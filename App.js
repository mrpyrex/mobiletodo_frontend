import React, { useState } from "react";
import { AppRegistry } from "react-native";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./Routes";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App = () => {
  // const [client, setClient] = useState(null);

  // if (!client) {
  //   return (
  //     <View>
  //       <Text>loading ...</Text>
  //     </View>
  //   );
  // }
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
AppRegistry.registerComponent("App", () => App);
