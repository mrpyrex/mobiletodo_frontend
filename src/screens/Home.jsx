import React from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";

import { GET_ALL_TODOS } from "../../graphql/queries";

const Home = () => {
  return (
    <Query query={GET_ALL_TODOS}>
      {({ data, loading, error }) => {
        if (loading) return <Text>loading...</Text>;
        if (error) return <Text>{error.message}</Text>;

        return (
          <View>
            <FlatList
              data={data.allTodos}
              renderItem={({ item }) => <Todo item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        );
      }}
    </Query>
  );
};

export default Home;
