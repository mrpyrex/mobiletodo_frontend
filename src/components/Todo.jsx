import React from "react";
import { View, Text } from "react-native";

const Todo = ({ item }) => {
  return (
    <View>
      <Text>{item.theme}</Text>
    </View>
  );
};

export default Todo;
