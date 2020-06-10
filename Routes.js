import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import TodoDetails from "./src/screens/TodoDetails";

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Details" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
